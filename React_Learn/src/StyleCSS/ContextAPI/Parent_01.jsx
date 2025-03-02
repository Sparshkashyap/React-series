
import { useState } from "react";
import Child_01 from "./Child_01";
import { SubjectContext } from "./Create";

function Parent(){ 
    
    const [subvalue,setvalue]=useState("");

    return(

        <div style={{backgroundColor:"yellow",margin:"2rem",padding:"2rem"}}>
             <h1>Context API</h1>
             <select value={subvalue} onChange={(event)=>setvalue(event.target.value)}>
                <option value="">Select Subject</option>
                <option value="Hindi">Hindi</option>
                <option value="Maths">Maths</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
             </select>
             
            <button onClick={()=>setvalue("")} style={{borderRadius:"0.3rem",marginLeft:"2rem"}}>RemoveSub</button>
       
            <SubjectContext.Provider value={subvalue}>

            <Child_01/>      

            </SubjectContext.Provider>
        </div>
       
    )
}

export default Parent;