import React from "react"
import PrivatePageLayout from "../../layout/PrivatePageLayout"
import PublicPageLayout from "../../layout/PublicPageLayout"

const layouts = {
    private: PrivatePageLayout,
    public: PublicPageLayout,
};

const ContextLayout = React.createContext();

class Layout extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <ContextLayout.Provider
                value={{
                    publicPageLayout: layouts["public"],
                    privatePageLayout: layouts["private"],
                }}
            >
                {children}
            </ContextLayout.Provider>
        )
    }
}

export { Layout, ContextLayout }
