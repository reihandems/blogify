import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom";

function BlogDetail() {
    const blog = useLoaderData();

    return (
        <>
            <div className="p-8">
                <div className="flex items-center gap-3">
                    <Link to={"/blog"} className="btn btn-square btn-neutral">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </Link>
                    <h1 className="text-2xl font-bold">Blog Detail</h1>
                </div>
                <div className="divider"></div>

                <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
                <p className="text-sm">{blog.body}</p>
            </div>
        </>
    )
}

export default BlogDetail