import { useLoaderData } from "react-router-dom"
import BlogCard from "../../components/BlogCard";

function Blog() {
    const { posts, users } = useLoaderData();
    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen p-8">
                <h1 className="text-3xl font-bold">Blogs</h1>
                <p className="text-sm text-gray-500 mb-3">List of your favorite blogs</p>

                <div className="flex flex-wrap gap-4">
                    {posts.map((post) => {
                        const user = users.find((users) => users.id === post.userId);

                        return <BlogCard key={post.id} title={post.title} id={post.id} name={user.name} />
                    })}
                </div>

            </div>
        </>
    )
}

export default Blog