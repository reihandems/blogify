import { Link } from "react-router-dom"

function BlogCard({id, title, name}) {
    return (
        <>
            <div className="card flex-1 min-w-48 bg-base-100 card-sm shadow-sm/20">
                <div className="card-body">
                    <Link to={`/blog/${id}`} className="card-title">{title}</Link>
                    <p>Author: {name}</p>
                </div>
            </div>
        </>
    )
}

export default BlogCard