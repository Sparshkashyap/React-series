import { useEffect, useState } from "react";

function UseEffect_Check(){

    const [val,setvalue]=useState(0);
    const [data,setdata]=useState(0);

// To prevent the Side Effect We use a UseEffect
    useEffect(()=>{ 
        fun()
    },[data])


    function fun(){

        console.log("I am Function✅",val);  
    }

    

    return (
        <>
        <h1>{val}</h1> 
       <button onClick={()=>setvalue(val+1)}>ClickMe</button>
        <h1>{data}</h1> 
       <button onClick={()=>setdata(data+1)}>ClickData</button>

       </>
    )
};


export default UseEffect_Check;