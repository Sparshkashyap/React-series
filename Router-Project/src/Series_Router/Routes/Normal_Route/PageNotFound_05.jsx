import { NavLink } from "react-router"

export function PageNotFound(){

    return(

        <div>
        <div className="page">
        <h1>Page Not Found</h1>
        </div>
        <div style={{paddingLeft:"38rem",fontSize:"1.3em"}}>
        <NavLink to="/user/home">Go to home</NavLink>
        </div>
    
        <img src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="" className="img"/>

       
        </div>
       
    )
}