import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import '/src/index.css'
import EditUser from "./EditUser";



function CustomAPI() {

    const [val, setval] = useState([]);
    const [load, setload] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {

        fun();
        setload(true)
    }, [])

    let url = "http://localhost:3000/user";

    async function fun() {

        let response = await fetch(url);
        let data = await response.json();
        setval(data);
        setload(false);

    }

    async function deleteuser(id) {

        let response = await fetch(url + "/" + id, {
            method: "delete"
        });

        response = await response.json();

        fun();


    }

    const edituser = (id) => {

        navigate("/edit" + "/" + id);
        // console.log(id);

    }


    return (
        <>

            <div className="parent">
                <h1 style={{ fontSize: "2rem", marginLeft: "1rem" }}>Integrate Json Server API</h1><br /><br /><br />
            </div>
            <div>
                <ul className="parent-header">
                    <li><h2>ID</h2></li>
                    <li><h2>Name</h2></li>
                    <li><h2>Age</h2></li>
                    <li><h2 >Email</h2></li>

                    <div className="parent-header-child">
                    <li><h2>Delete</h2></li>
                    <li><h2>Edit</h2></li>
                    </div>
                </ul>
            </div>
            <div className="customApi">

                {
                    !load ?
                        val.map((item) => (

                            <>
                                <div className="div-01">
                                    
                                    <ul className="custom-user all-data">
                    
                                        <li><h2>{item.id}</h2></li>
                                        <li><h2>{item.name}</h2></li>
                                        <li><h2>{item.age}</h2></li>
                                        <li><h2>{item.email}</h2></li>
                                     
                                    </ul>

        
            
                                    <div className="div">
                                        <li><button onClick={() => deleteuser(item.id)} className="delete-button">Delete</button></li>
                                        <li><button onClick={() => edituser(item.id)} className="delete-button">Edit</button></li>
                                    </div>
                            


                                </div>
                            </>
                        ))

                        : <h1 style={{ fontSize: "2rem", marginLeft: "6rem" }} >Data Loading....</h1>
                }

            </div>

        </>
    )
}


export default CustomAPI;