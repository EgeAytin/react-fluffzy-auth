import React from "react"
import { Router, Switch, Route, Redirect } from "react-router-dom"
import { history } from "../history"
import AppRoute from "../router/RouteConfig"

import * as RouteComponent from "../utility/routes"

class AppRouter extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <AppRoute
                        exact
                        path="/"
                        component={RouteComponent.Home}
                        privateRoute
                    />
                    <AppRoute
                        path="/auth/login"
                        component={RouteComponent.Login}
                    />
                    <AppRoute
                        exact
                        path="/not-found"
                        component={RouteComponent.NotFound404}
                    />
                    <Route
                        exact
                        path="/auth"
                        render={() => {
                            return (
                                <Redirect to="/auth/login" />
                            )
                        }}
                    />
                    <Redirect to="/not-found"/>
                </Switch>
            </Router>
        )
    }
}

export default AppRouter
