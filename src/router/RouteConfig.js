import React, {useReducer, useEffect, Suspense} from "react"
import {Route, Redirect} from "react-router-dom"

//context
import {ContextLayout} from "../utility/context/Layout"
import AuthContext from "../utility/context/Auth"

const AppRoute = (
    {
        component: Component,
        privateRoute,
        ...rest
    }) => {
    const [state, dispatch] = useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                        isLoading: false,
                    };
                default:
                    return {
                        ...prevState,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null,
        }
    );

    const authContext = React.useMemo(
        () => ({
            signIn: async data => {
                dispatch({type: 'SIGN_IN', token:data });
                await localStorage.setItem('access_token', data);
            },
            signOut: async () => {
                dispatch({type: 'SIGN_OUT'});
                await localStorage.removeItem('access_token');
            },
            signUp: async data => {
                dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
            },
        }),
        []
    );

    const checkToken = async () => {
        let userToken = await localStorage.getItem('access_token');

        // CHECK TOKEN HERE

        dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    useEffect(() => {
        checkToken()
    }, []);

    if (state.isLoading) {
        // We haven't finished checking for the token yet
        return (
            <>
                <div>TOKEN CHECKING....</div>
            </>
        );
    }

    return (
        <Route
            {...rest}
            render={props => {
                return (
                    <AuthContext.Provider value={authContext}>
                        <ContextLayout.Consumer>
                            {context => {
                                let LayoutTag =
                                    privateRoute
                                        ? context.privatePageLayout
                                        : context.publicPageLayout
                                return (
                                    <LayoutTag {...props}>
                                        {
                                            privateRoute
                                                ? <Route {...rest} render={props => (
                                                    <>
                                                        {state.userToken === null ? (
                                                            // No token found, user isn't signed in
                                                            <Redirect to="/auth/login" />
                                                        ) : (
                                                            // User is signed in
                                                            <Suspense fallback={<div>PAGE_LOADING</div>}>
                                                                <Component {...props} />
                                                            </Suspense>
                                                        )}
                                                    </>
                                                )}/>
                                                :
                                                <Suspense fallback={<div>PAGE_LOADING</div>}>
                                                    <Component {...props} />
                                                </Suspense>
                                        }
                                    </LayoutTag>
                                )
                            }}
                        </ContextLayout.Consumer>
                    </AuthContext.Provider>
                )
            }}
        />
    )

};

export default AppRoute
