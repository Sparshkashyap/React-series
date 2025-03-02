import { useState } from "react";


const useToggle=(defaultvalue)=>{

    const [value,setval]=useState(defaultvalue);

    console.log(value);
    

    function Togglevalue(val){

    if(typeof val!='boolean'){
        setval(!value);
    }
    else{
        setval(val);
    }

    }

    return [value,Togglevalue];
}



export default useToggle;