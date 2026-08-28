import { useLoaderData } from "react-router-dom"
import BlogCard from "../../components/BlogCard";

function Blog() {
    const blog = useLoaderData();
    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen p-8">
                <h1 className="text-3xl font-bold">Blogs</h1>
                <p className="text-sm text-gray-500 mb-3">List of your favorite blogs</p>

                <div className="flex flex-wrap max-w-150 gap-4">
                    {blog.map((blog) => (
                        <BlogCard {...blog} />
                    ))}
                </div>

            </div>
        </>
    )
}

export default Blog