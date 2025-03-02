import { useId } from "react";


function UddateForm(){

    return(
        <div style={{margin:"2rem"}}>
        <h1>Always Generate UniqueID through ={">"} usled</h1>
            <Form/>
            <hr />
            <Form/>
        </div>
    )
}


export default UddateForm;


export function Form(){

    const name=useId();
    // const password=useId();
    // const age=useId();
    // const condition=useId();
    

    return(
        <div>
            <label htmlFor={name+"name"}>Enter the Name: </label>
            <input type="text"  id={name+"name"} placeholder="Enter the name" onChange={(e)=>console.log(e)
            }/><br /><br />
            <label htmlFor={name+"age"}>Enter the Age:</label>
            <input type="number"  id={name+"age"} placeholder="Enter the age"  onChange={(e)=>console.log(e)} /><br /><br />
            <label htmlFor={name+"password"}>Enter the City: </label>
            <input type="password"  id={name+"password"} placeholder="Enter the password"  onChange={(e)=>console.log(e)}/><br /><br />
            <input type="checkbox"  id={name+"condition"}/>
            <label htmlFor={name+"condition"}>Enter the Name: </label>
        </div>
    )
}