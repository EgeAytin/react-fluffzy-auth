import React from "react"

const FullPageLayout = ({ children }) => {
    return (
        <>
            <h1>Public Page</h1>
            <div>
                {children}
            </div>
        </>
    )
};

export default FullPageLayout
