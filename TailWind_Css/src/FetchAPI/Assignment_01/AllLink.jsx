import { NavLink } from "react-router"

import '/src/index.css';

function AllNavLink(){

    return(

        <div>
            <ul className="NavLink-parent">
                <li><NavLink to="/" className="NavLink-child"><h2>List</h2></NavLink></li>
                <li><NavLink to="/adduser" className="NavLink-child"><h2>AddUser</h2></NavLink></li>
            </ul>
        </div>
    )
}


export default AllNavLink;
