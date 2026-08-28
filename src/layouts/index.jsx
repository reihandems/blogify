import { NavLink, Outlet } from "react-router-dom";

export const RootLayout = () => {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <NavLink to={'/'} className="btn btn-ghost text-xl">Blogify</NavLink>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-2">
                        <li>
                            <NavLink to={'/'} className={({ isActive }) => (
                                isActive ? 'bg-black text-white' : ''
                           )}>Home</NavLink> 
                        </li>
                        <li>
                            <NavLink to={'/blog'} className={({ isActive }) => (
                                isActive ? 'bg-black text-white' : ''
                           )}>Blogs</NavLink> 
                        </li>
                        <li>
                            <NavLink to={'/about'} className={({ isActive }) => (
                                isActive ? 'bg-black text-white' : ''
                           )}>About</NavLink> 
                        </li>
                    </ul>
                </div>
            </div>

            <Outlet />
        </>
    )
}