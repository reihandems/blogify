import { useState } from "react"

import Search from "../components/Search"
import Article from "../components/Article"
import PostData from "../posts.json"

function Home() {
    const [posts, setPosts] = useState(PostData);
    const [search, setSearch] = useState("");
    const [totalPosts, setTotalPosts] = useState(0);

    const onSearchChange = () => {
        const filteredPost = PostData.filter((item) => {
            return item.title.toLowerCase().includes(search.toLowerCase());
        });
        setPosts(filteredPost);
        setTotalPosts(filteredPost.length);
    }

    console.log(search);
    
    const onKeySearch = (event) => {
        if (event.key === "Enter") {
            onSearchChange()
        }
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen p-8">
                <h1 className="text-3xl font-bold mb-1">Simple Blog</h1>
                <p className="text-gray-500 mb-3">Find your favorite blog.</p>
                
                <Search
                    onSearchChange={onSearchChange}
                    inputSearch={setSearch}
                    totalPosts={totalPosts}
                    onKeySearch={onKeySearch}
                    search={search}
                />

                <div className="flex flex-wrap max-w-96 w-full gap-4">
                    {posts.map((props, index) => (
                        <Article key={index} {...props} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home