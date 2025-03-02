import { NavLink, Outlet } from "react-router";
import '/src/Style/style.css'
function NavBar() {

    return (

        <>

        <div className='parent'>
            <h1>Logo</h1>

            <ul className='child'>
                <li> <NavLink to="/user/home" className='li'>Home</NavLink></li>
                <li> <NavLink to="/user/about" className='li'>About</NavLink></li>
                <li> <NavLink to="/user/login" className='li'>Login</NavLink></li>
                <li> <NavLink to="/user/contact" className='li'>Contact</NavLink></li>
                <li> <NavLink to="/college" className='li'>College</NavLink></li>
                <li> <NavLink to="/users/" className='li'>Users</NavLink></li>
                <li> <NavLink to="/users/list" className='li'>UserList</NavLink></li>
            </ul>

        </div>
        <Outlet/>
        </>
        
    )
}

export default NavBar;