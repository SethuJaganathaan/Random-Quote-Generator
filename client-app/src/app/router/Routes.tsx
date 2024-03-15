import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../App";
import AllQuote from "../../feature/AllQuote";
import RandomQuote from "../../feature/RandomQuote";

export const routes: RouteObject[] = [
    {
        path : '/',
        element: <App />,
        children: [
            { path: 'All', element: <AllQuote />},
            { path: 'random', element: <RandomQuote />}
        ]
    }
]

export const router = createBrowserRouter(routes);