function Search({onSearchChange, inputSearch, totalPosts, onKeySearch, search}) {
    return (
        <>
            <div className="flex flex-row gap-2">
                <label className="input mb-2">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input onChange={(event) => inputSearch(event.target.value)} value={search} onKeyDown={onKeySearch} type="text" className="grow" placeholder="Search Article..." />
                    <kbd className="kbd kbd-sm">Enter</kbd>
                </label>
                <button onClick={onSearchChange} className="btn btn-neutral">Cari</button>
            </div>
        
            <p className="text-sm text-gray-600 mb-3">Ditemukan {totalPosts} data dengan kata kunci {search === "" ? "[keyword]" : search}</p>
        </>
    )
}

export default Search