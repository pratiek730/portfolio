import { NavLink, Outlet } from 'react-router-dom';
import './navbar.styles.css'

function Navbar() {
    return ( <>
    
        <div className="navbar-container">

            <div className='navbar-logo-wrapper'>
                <NavLink to="/" className='navbar-logo'>
                    P. Parashar
                </NavLink>
            </div>
            <div className='navbar-elements-container'>
                <NavLink exact to="/" className="navbar-elements" >
                    Home
                </NavLink>
                <NavLink to="/aboutme" className="navbar-elements"  >
                    About Me
                </NavLink>
                {/* <NavLink to="/works" className="navbar-elements" >
                    Works
                </NavLink>
                <NavLink to="/hireme" className="navbar-elements" >
                    Hire Me
                </NavLink>
                <NavLink to="/blog" className="navbar-elements" >
                    Blog
                </NavLink> */}
            </div>
        </div>
        <Outlet />
        </>
     );
}

export default Navbar;