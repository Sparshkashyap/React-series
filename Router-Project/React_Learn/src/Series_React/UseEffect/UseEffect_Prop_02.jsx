/* eslint-disable react/jsx-no-undef */
import {useState } from "react";
import UserProp from "./UseEffect_Prop_03";
import LifeCycle from "./UseEffect_LifeCycle";
import Head from "../Header";
import UseEffect_Check from "./UseEffect_State_01";

function UseEffectProp02(){
    const[count,setcount]=useState(0);
    const[data,setdata]=useState(0);


    return(
        <>
        <Head/>
        {/* <UseEffect_Check/> */}
        <Head/>
        {/* <UserProp count={count}  data={data}/> */}
        <button onClick={()=>setcount(count+1)}>ClickMe</button>
        <button onClick={()=>setdata(data+1)}>Clickdata</button>
        <Head/>
        <LifeCycle/>
        </>

    )
}


export default UseEffectProp02;