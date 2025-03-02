import { useEffect, useState } from "react";

function LifeCycle(){
    const [count,setcount] =useState(0);
    const [countitem,setcountitem] =useState(0);
    const [display,settoggle] =useState(false);

    useEffect(()=>{
        fun1();
    },[])

    useEffect(()=>{
       
        fun2();
    },[countitem])

    useEffect(()=>{

        return ()=>{
            fun3();
        }
      
    },[display])


    function fun2(){

        console.log("Updating phase 📈");
         
    }
    function fun1(){

        console.log("Mounting phase ✅");
         
    }
    function fun3(){
            
        console.log("UnMounting phase 🧪");
         
    }
    
 
    return(
        <>
        {
            display ?
            <>
              <h1></h1>
              <h1></h1>
            </>:
            <>
             <h1>Counter : {count}</h1>
             <h1>CounterData : {countitem}</h1>
            </>
        }
       
        <button onClick={()=>setcount(count+1)}>ClickMe</button>
        <button onClick={()=>setcountitem(countitem+1)}>ClickData</button>
        <button onClick={()=>settoggle(!(false))}>Toggle</button>
        </>

    );
}

export default LifeCycle;