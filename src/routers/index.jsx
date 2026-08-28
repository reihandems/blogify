import { createBrowserRouter } from "react-router-dom"
import { RootLayout } from "../layouts"

import Home from "../pages/Index"
import About from "../pages/About"
import Blog from "../pages/blogs/Blog"
import BlogDetail from "../pages/blogs/BlogDetail"

import { blogs, blogDetail } from "../apis/loaders"

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
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
                element: <Blog />,
                loader: blogs
            },
            {
                path: '/blog/:id',
                element: <BlogDetail />,
                loader: blogDetail
            }
        ]
    }
])