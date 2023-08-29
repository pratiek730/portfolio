import { NavLink, Outlet } from 'react-router-dom';
import './navbar.styles.css'
import { DropDownIcon } from '../../assets/icons/skills.icons';

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
                <div className="dropdown">
                    <NavLink className="navbar-elements">Projects <img src={DropDownIcon} className='drop-icon' /></NavLink>
                    <div className="dropdown-content">
                        <NavLink className="navbar-elements" to='http://projectapi.pratiekparashar.com/' target='_blank'>ApiConnect</NavLink>
                    </div>
                </div>
            </div>
        </div>
        <Outlet />
        </>
     );
}

export default Navbar;