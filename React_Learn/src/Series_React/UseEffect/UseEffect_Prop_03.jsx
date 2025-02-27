/* eslint-disable react/prop-types */

import { useEffect } from "react";

function UserProp({count,data}){


    useEffect(()=>{
        fun();

    },[data])
    function fun(){

        console.log("Hello Buddy");
        
    }



    return(
        <>
        <h1>Counter :{count}</h1>
        <h1>Counter_data :{data}</h1>
        </>
        
    )
}


export default UserProp;