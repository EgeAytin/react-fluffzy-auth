// Route-based code splitting

import { lazy } from "react"

export const Home = lazy(() =>
    import("../views/pages/Home")
);

//AUTH
export const Login = lazy(() =>
    import("../views/pages/auth/Login")
);


//ERROR
export const NotFound404 = lazy(() =>
    import("../views/pages/error/NotFound")
);
