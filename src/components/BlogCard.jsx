import { Link } from "react-router-dom"

function BlogCard({id, title}) {
    return (
        <>
            <div className="card flex-1 min-w-48 bg-base-100 card-sm shadow-sm/20">
                <div className="card-body">
                    <Link to={`/blog/${id}`} className="card-title">{title}</Link>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                </div>
            </div>
        </>
    )
}

export default BlogCard