import { useContext } from "react"
import { GlobalContext } from "../context"

function ArticleStatus({ isNew }) {
    return (
        <>
            <div className="badge badge-soft badge-primary">
                {isNew ? "Terbaru" : "Reguler"}
            </div>
        </>
    )
}

function Article({ title, date, tags, isNew }) {
    const user = useContext(GlobalContext)
    return (
        <>
            <div className="card bg-base-100 card-sm shadow-sm/30 flex-1 min-w-40">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Date Released: {date}</p>
                    <p>Tags: {tags.join(", ")}</p>
                    <p>Author: {user.username}</p>
                    <ArticleStatus isNew={isNew} />
                </div>
            </div>
        </>
    )
}

export default Article