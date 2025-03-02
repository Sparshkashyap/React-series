import { useState } from "react";
import Create_data from "./Child_01";
import Display_data from "./Child_02";


function Midnari(){

    const [user,setinput]=useState('');

    return(
        <div style={{margin:"2rem"}}>
        <h1>Lifting State</h1><br /><br />
        <Display_data user={user}/><br /><br />
        <Create_data set={setinput}/>
        </div>
    )
}


export default Midnari;