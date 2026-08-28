import Search from "../components/Search"
import Article from "../components/Article"

function Home() {
    return (
        <>
            <div className="font-mono flex flex-col justify-center items-center h-screen p-8">
                <h1 className="text-3xl font-bold mb-1">Simple Blog</h1>
                <p className="text-gray-500 mb-3">Find your favorite blog.</p>
                
                <Search />

                <Article/>
            </div>
        </>
    )
}

export default Home