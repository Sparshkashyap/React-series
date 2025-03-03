import { useState } from "react";
import { useNavigate } from "react-router";

function AddUser() {

    const [name, setname] = useState("");
    const [age, setage] = useState("");
    const [email, setemail] = useState("");

    const navigate=useNavigate();


    const Handledata= async ()=>{

        let url="http://localhost:3000/user";
        let response= await fetch(url,{
            method:"Post",
            body: JSON.stringify({name,age,email})
        });

     response= await response.json();

     if(response){
        alert("User added Successfully✅")
     }

    //  window.location.reload();
     navigate("/");

         
        
    }



    return (
        <>  <div>
            <h1 style={{ display: "flex", justifyContent: "center", fontSize: "1.5rem" }}>Add New User in the List</h1><br />
        </div>
            <div className="form">
                <label htmlFor="name">Please Enter your Name</label><br /><br />
                <input type="text" placeholder="Enter your name" id="name" className="border"
                onChange={(e)=>setname(e.target.value)}
                /><br /><br />

                <label htmlFor="age">Please Enter your Age</label><br /><br />
                <input type="number" placeholder="Enter your age" id="age" className="border" 
                onChange={(e)=>setage(e.target.value)}
                /><br /><br />

                <label htmlFor="email">Please Enter your Email</label><br /><br />
                <input type="text" placeholder="Enter your email" id="email" className="border" 
                onChange={(e)=>setemail(e.target.value)}
                /><br /><br />
                <button onClick={Handledata} className="button" >add user</button>

            </div>

        </>
    )
}


export default AddUser;