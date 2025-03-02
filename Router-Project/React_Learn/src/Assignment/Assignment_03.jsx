import { useState } from "react"

function Toggle(){

    const [value,setvalue]=useState(true);
 
    

    return(
        <>
  
            {
                value ? <h1>sparsh kashyap</h1>:<h1>null</h1>

            }
            
       
        <button onClick={()=>setvalue(!value)}>Toggle</button>
        </>

    )
}


export default Toggle;