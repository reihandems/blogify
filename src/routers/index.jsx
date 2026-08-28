import { createBrowserRouter } from "react-router-dom"

import Home from "../pages/Index"
import About from "../pages/About"
import Blog from "../pages/blogs/Blog"

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/blog',
        element: <Blog />
    }
])