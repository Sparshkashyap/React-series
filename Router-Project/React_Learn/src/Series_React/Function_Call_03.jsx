import { useState } from "react";
import Head from "./Header";

function FunCall(){

    function fruit(name){
      alert(name);

    }

    const Arrow =()=>{
        alert("This is Arrow Function");
    }

    return(
       <>
       <button onClick={()=>fruit("Apple")}>ClickMe</button>
       <button onClick={Arrow}>ArrowClick</button>
       </>
    )
}


export default FunCall;


export function FunOnChange(){
    const [value,setvalue] = useState("");
    // State destructuring in React hooks('use' sai jo word start hota hai all are Hooks);
    const [val,setval]     = useState("Orange");
 

    function setItem(e){
        setvalue(e.target.value);   
    }
    function setfruit(p){

        setval(p.target.value); 
        console.log(p.target.value);
        

    }
    
    return(
        <>
        <h1>State+onChange ka use</h1>
        <input  onChange={setItem} value={value}/>
        <h1>{value}</h1>
         <Head/>
        <h1>{val}</h1>
        <button onClick={setfruit} value={"Apple"}>ClickApple</button>
        <button  onClick={setfruit} value={"Banna"}>ClickBanna</button>
        </>

    )
};