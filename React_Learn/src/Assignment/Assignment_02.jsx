import { useState } from "react";


function Counter(){

    const [count,setCount]=useState(0);

    function SetCounterValue(e){
        if(e>=0){
        setCount(e);
        }
    }



    return(
        <>
        <h1>Counter : {count}</h1>
        <button onClick={()=>SetCounterValue(count+1)}>ClickMe</button>
        <button onClick={()=>SetCounterValue(count-1)}>ClickMeReverse</button>
        </>

    )
}


export default Counter;
