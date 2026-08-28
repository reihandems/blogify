import AboutData from "../about.json"

function About() {
    return (
        <>
            <div className="flex flex-col min-h-screen justify-center items-center p-8">
                <h1 className="text-2xl mb-3">About <span className="font-black">Blogify</span></h1>
                <div className="max-w-120 mb-8">
                    <p className="text-justify"><span className="font-bold">Blogify</span> is a personal learning project created to practice building modern web applications with React.js. The project focuses on component-based development, API fetching, routing, and responsive UI design.</p>
                </div>

                <h1 className="text-2xl mb-3">Technologies</h1>
                <div className="flex flex-wrap gap-4 mb-8 w-full max-w-120">
                    {AboutData.map((props, index) => (
                        <div key={index} className="card w-96 bg-base-100 card-sm shadow-sm/20 flex-1 min-w-40">
                            <div className="card-body">
                                <div className="flex items-center gap-2">
                                    <div className="avatar">
                                        <div className="w-14 rounded-full">
                                            <img alt="logo" src={props.url} />
                                        </div>
                                    </div>
                                    <h2 className="card-title">{props.name}</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <h1 className="text-2xl mb-3">Developer</h1>
                <div className="avatar mb-3">
                    <div className="w-18 rounded-full shadow-md/15">
                        <img alt="Tailwind-CSS-Avatar-component" src="https://media.licdn.com/dms/image/v2/D5603AQFuhfKZMxoxcg/profile-displayphoto-crop_800_800/B56Z5oyz3HIIAI-/0/1779874612784?e=1789603200&v=beta&t=wff1CGvo0plzwBaAGLepqtAEbCr8alNZZpRALc0C6Ao" />
                    </div>
                </div>
                <div className="max-w-120">
                    <p className="text-justify mt-2">Built by <span className="font-bold">Reihan D. Challada</span><br /><br /> I'm a student and aspiring Full Stack Developer currently learning modern web development with React.js and exploring technologies across the frontend and backend ecosystem</p>
                </div>
            </div>
        </>
    )
}

export default About