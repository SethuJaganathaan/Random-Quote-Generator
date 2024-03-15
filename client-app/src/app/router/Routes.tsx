import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../App";
import RandomQuote from "../../feature/Homepage";
import Homepage from "../../feature/Homepage";

export const routes: RouteObject[] = [
    {
        path : '/',
        element: <App />,
        children: [
            { path: 'Homepage', element: <Homepage />},
            { path: 'random', element: <RandomQuote />}
        ]
    }
]

export const router = createBrowserRouter(routes);