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
                    <div className="mt-3 flex gap-3">
                        <a href="https://github.com/reihandems" target="_blank" className="btn bg-black text-white border-black">
                            <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/reihandchallada" target="_blank" className="btn bg-[#0967C2] text-white border-[#0059b3]">
                            <svg aria-label="LinkedIn logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fillRule="evenodd"></path></svg>
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About