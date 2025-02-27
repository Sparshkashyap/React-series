/* eslint-disable react/prop-types */
import {useState} from 'react';

function User({ob}){

   const [val,setvalue]=useState("Sparsh kashyap");

   function set(e){
    setvalue(e.target.value)
    console.log(e.target.value);
    
   }
    
    

    return(
        <>  
        <hr></hr>
        <h1>Name is :{val}</h1>
        <h1>{ob.age}</h1>
        <h1>{ob.email}</h1>
        <button onClick={set} value={"Radha valab"}>ClickMe</button>
        </>
    )
}

export default User;

export function User2({arr}){

    return(
         <>
        <h1>{arr[1]}</h1>
        </>

    )
}