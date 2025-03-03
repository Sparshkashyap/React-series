import { useNavigate, useParams } from 'react-router-dom';
import '/src/index.css';
import { useEffect } from 'react';
import { useState } from 'react';

function EditUser() {

    const {id} = useParams();
    const [name,setname] = useState();
    const [age,setage] = useState();
    const [email,setemail] = useState();

    const navigate=useNavigate();

    const url="http://localhost:3000/user";

    useEffect(()=>{

        showdata();

    },[]);

    const showdata = async ()=>{
        let response = await fetch(url+"/"+id);
        response = await response.json();

        if(response){

            console.log(response);
        setname(response.name);
        setage(response.age);
        setemail(response.email);
        }
        
      
        
    }


    const UpdateData = async ()=>{

        console.log(name,age,email);
    
        let res = await fetch(url+"/"+id,{
            body:JSON.stringify({name,age,email}),
            method:"PUT"
        });
        res = await res.json();

        console.log(res);
        

        if(res){

            alert("Update Data Successfully 🔥✅");
        }


        navigate("/");

        

        
    }










    return (
        <>
            <div className="edituser-div">

                <h1 >Edit User Details</h1>

            </div>

            <div className="form">
                <label htmlFor="name">Please Enter your Name</label><br /><br />
                <input type="text"  value={name} onChange={(e)=>setname(e.target.value)}  placeholder="Enter your name" id="name" className="border"
                
                /><br /><br />

                <label htmlFor="age">Please Enter your Age</label><br /><br />
                <input type="number" value={age} onChange={(e)=>setage(e.target.value)} placeholder="Enter your age" id="age" className="border" 

                /><br /><br />

                <label htmlFor="email">Please Enter your Email</label><br /><br />
                <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter your email" id="email" className="border" 

                /><br /><br />
                <button className="button-update" onClick={UpdateData}>Update User</button>
                
            </div>



        </>
    )
}


export default EditUser;