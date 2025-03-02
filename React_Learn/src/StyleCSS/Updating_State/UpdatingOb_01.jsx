import { useState } from "react";

function UpdatingObject(){
    
    const custom_obj={
        name:"sparsh kashyap",
        age:20,
        student:{
            student_id:63,
            student_name:"Rohan"
        }
    }

    const [ob,setname]=useState(custom_obj);


    const Handlename=(data)=>{
        
       ob.name=data;
       setname({...ob})
    }

    const Handleage=(data)=>{

       ob.age=data;
       setname({...ob})
    }

    const HandleNestedObj=(data)=>{

        ob.student.student_id=data;
        console.log(  ob.student.student_id);
        
        setname({...ob,student:{...ob.student,student_id:ob.student.student_id}})


    }

    return(
        <div style={{margin:"2rem"}}>
        <h1>Updating Objects in State</h1><br />
        <input type="text" placeholder="Enter your name" onChange={(val)=>Handlename(val.target.value)}/> <br /><br /> 
        <input type="number" placeholder="Enter your Age" onChange={(val)=>Handleage(val.target.value)}/> <br /><br />    
        <input type="number" placeholder="Enter your Student_ID" onChange={(val)=>HandleNestedObj(val.target.value)}/> <br /><br />    
    
        <h3>The UpdatedName is : {ob.name}</h3><br />
        <h3>The UpdatedAge is : {ob.age}</h3><br />
        <h3>The UpdatedStudent_ID is : {ob.student.student_id}</h3>
    
        </div>
    )
}

export default UpdatingObject;