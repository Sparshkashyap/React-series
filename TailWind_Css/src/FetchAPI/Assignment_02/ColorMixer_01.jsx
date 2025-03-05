import { useState } from "react";



function ColorMixer() {

    const color=localStorage.getItem('color');

    const [r, setR] = useState(color && color.r? color.r:0);
    const [g, setG] = useState(color && color.g? color.g:0);
    const [b, setB] = useState(color && color.b? color.b:0);


    const save =()=>{

        localStorage.setItem('color',JSON.stringify({r,g,b}));
        console.log(r,g,b);
        
        alert("Save State Successfully ✅")
    }


    return (

        <>
            <h1>Color Mixer</h1>
            <div style={{ backgroundColor: 'rgb('+r+','+g+','+b+')', height: 200, width: 200, borderRadius: "2rem", border: "2px solid black", boxShadow: "2px 3px 8px 0.3px black" ,marginLeft:"2rem"}}></div><br /><br />
            <label htmlFor="">Red </label>
            <input    value={r}     type="range" min={0} max={255} onChange={(event) => setR(event.target.value)} /> <br /><br />
            <label htmlFor="">Green </label>
            <input value={g}  type="range" min={0} max={255} onChange={(event) => setG(event.target.value)} /> <br /><br />
            <label htmlFor="">Blue </label>
            <input value={b}   type="range" min={0} max={255} onChange={(event) => setB(event.target.value)} /> <br /><br />

            <button onClick={save}>Save State</button>

        </>
    )
}


export default ColorMixer;