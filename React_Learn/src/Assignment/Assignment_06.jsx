import { useState } from "react";

function CheckedFun(){
    const [val,setvalue] =useState([]);

    const Handlevalue = (event)=>{
        setvalue(event.target.value);

        if(event.target.checked){
            setvalue([...val,event.target.value]);
        }
        else{
            setvalue([...val.filter((item)=>item!=event.target.value)]);
        }

        
        
    }


    return(
        <>
        <input type="checkbox" value={"java,"} id="java" onChange={Handlevalue}/>
        <label htmlFor="java">Java</label>
        <br />
        <input type="checkbox" value={"php,"} id="php" onChange={Handlevalue}/>
        <label htmlFor="php">php</label>
        <br />
        <input type="checkbox" value={"javascript,"} id="javascript" onChange={Handlevalue}/>
        <label htmlFor="javascript">Javascript</label>
        <br />
        <input type="checkbox" value={"python,"} id="python" onChange={Handlevalue}/>
        <label htmlFor="python">python</label>
        <h1>{val}</h1>
        </>
    )
}

export default CheckedFun;