/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function Clock_Time({ color }) {

    const [time,settime]=useState(new Date().toLocaleTimeString());

    

    useEffect(()=>{
        setInterval(()=>{
            settime(new Date().toLocaleTimeString())
        },1000);
    },[])


    return (

        <div style={{  borderColor:color,border: "2px solid purple", borderRadius: "10px", display: "flex", justifyContent: "center", boxShadow: "2.8px 1px 2.5px 2.6px " }}>

            <h1>{time}</h1>

        </div>


    )
}


export default Clock;



export function Clock() {

    const [clockcolor, setvalue] = useState("");

    return (
        <>
            
            <select defaultValue={"black"} onChange={(e)=>setvalue(e.target.value)}>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="black">Black</option>
                <option value="white">White</option>
            </select>
            <br />
            <br />
            <Clock_Time color={clockcolor}/>
        </>
    )
}