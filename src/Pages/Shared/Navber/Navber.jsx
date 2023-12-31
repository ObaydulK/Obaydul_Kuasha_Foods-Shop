import { Link } from "react-router-dom";
const Navber = () => {

    const navoption = <>

        <li> <Link to="/" >Home</Link></li>
        <li> <Link to="/contact" >contact us</Link></li>
        <li> <Link to="/dashboard" > Dashboard</Link></li>
        <li> <Link to="/menu" > Our Menu</Link></li>
        <li> <Link to="/ourshop" >our Shop</Link></li>
        <li> <Link to="/signout" >Sign Out</Link></li>
        



    </>



    return (
        <div>
            <div className="navbar fixed z-10 max-w-screen-lg  text-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu font-bold uppercase menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navoption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">OBAYDUL <br/> KUASHA</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu uppercase font-bold menu-horizontal px-1">
                    {navoption}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navber;