import { useState } from "react";

function Radio(){
    const [val,setvalue]=useState("Female");
    const [city,setcity]=useState("");
   

    return(
    <>
    <h1>Select Gender : {val}</h1>
    <input type="radio" value={"Male"} id="male" name="gender"  onChange={(e)=>setvalue(e.target.value)} checked={val === "Male"}/>
    <label htmlFor="male">Male</label>
    <input type="radio" value={"Female"} id="female" name="gender"  onChange={(e)=>setvalue(e.target.value)} checked={val ==="Female"}/>
    <label htmlFor="female">Female</label>
    <br></br>
    <h1>Select City : {city}</h1>
    <select defaultValue="Delhi" onChange={(e)=>setcity(e.target.value)}>
        <option value="Saharanpur">Saharanpur</option>
        <option value="Gudgauv">Gudgauv</option>
        <option value="Delhi">Delhi</option>
        <option value="Jaipur">Jaipur</option>
    </select>

    </>         
    )
}

export default Radio;