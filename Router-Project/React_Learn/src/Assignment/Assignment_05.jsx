import { useState } from "react";

function InputField(){
    const [Inputvalue,setInputvalue]=useState("");
    
    function set(){
        setInputvalue("");
    }
    return(
        <>

        <h1>{Inputvalue}</h1>
        <input type="text" value={Inputvalue} onChange={(e)=>setInputvalue(e.target.value)}/>
        <button onClick={set}>ClickMe</button>

        </>
       
    )
}


export default InputField;