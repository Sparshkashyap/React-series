import { Link, Route, Routes } from "react-router";
import AddUser from "./AddUser";
import CustomAPI from "./Json_Server_Api_Fetch";
import AllLink from "./AllLink";
import EditUser from "./EditUser";


function Admin(){

    
    return(

        <>
        <h1 className="head">Routes for User list and add User UI</h1><br />
        <AllLink/>
        <Routes>

            <Route path="/" element={<CustomAPI/>}/>
            <Route path="/adduser" element={<AddUser/>}/>
            <Route path="/edit/:id" element={<EditUser/>}/>

        </Routes>
        </>

        
    )
}

export default Admin;