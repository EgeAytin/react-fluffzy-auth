import React from "react";

import AuthContext from "../utility/context/Auth";

const PrivatePageLayout = ({ children }) => {
    const { signOut } = React.useContext(AuthContext);

    async function logout(){
        signOut()
    }

    return (
        <>
            <h1>Private Page</h1>
            <div>
                {children}
            </div>
            <button onClick={logout}>
                log out
            </button>
        </>
    );
};

export default PrivatePageLayout
