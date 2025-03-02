import { Link, Outlet } from "react-router"
import '/src/Style/style.css'

export function College() {

    return (
        <>
            
                
            <div className="College_parent">

                <h1>College</h1>
                <div className="College_child">

                <Link to="student" className="li">Student</Link>
                <Link to="faculty" className="li">Faculty</Link>
                <Link to="professor" className="li">Professor</Link>
                </div>
                <Link to="/user/home"><h4>back</h4></Link>
            </div>

            <Outlet/>

        

        </>
    )
}