import Search from "../components/Search"
import Article from "../components/Article"
import PostData from "../posts.json"

function Home() {
    return (
        <>
            <div className="font-mono flex flex-col justify-center items-center h-auto p-8">
                <h1 className="text-3xl font-bold mb-1">Simple Blog</h1>
                <p className="text-gray-500 mb-3">Find your favorite blog.</p>
                
                <Search />

                <div className="flex flex-wrap max-w-96 w-full gap-4">
                    {PostData.map((props, index) => (
                        <Article key={index} {...props} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home