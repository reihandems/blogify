import { createBrowserRouter } from "react-router-dom"

import Home from "../pages/Index"

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    }
])