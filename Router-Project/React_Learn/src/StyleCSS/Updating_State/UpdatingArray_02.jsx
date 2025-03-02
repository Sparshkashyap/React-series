import { useState } from "react"

function ArrayUpdated(){

    

    // const [arrvalue,setarrvalue]=useState( ["sparsh","Peter","Lauci","Haripoter"])
    const [arrvalue,setarrvalue]=useState( [
        {
            name:"sparsh",
            age:20,
            location:"saharanpur"
        },
        {
            name:"Peter",
            age:25,
            location:"Delhi"
        },
        {
            name:"Lucci",
            age:30,
            location:"Laknao"
        }
    ])

  

    const Handleinput=(data)=>{
        arrvalue[arrvalue.length-1].name=data;
        setarrvalue([...arrvalue]);
        
    }
    const Handleinputage=(age)=>{
        arrvalue[arrvalue.length-1].age=age;
        setarrvalue([...arrvalue]);
        
    }

    return(
        <div style={{margin:"2rem"}}>

            <h1>UpdateValue in the Array</h1><br /><br />
            <input type="text" placeholder="Enter the name" onChange={(e)=>Handleinput(e.target.value)}/><br /><br />
            <input type="number" placeholder="Enter the age" onChange={(e)=>Handleinputage(e.target.value)}/><br /><br />
            <hr />

        {
            arrvalue.map((item,index)=>(

                <div key={index}>

                <h3>{item.name} {item.age}</h3>
                </div>
            ))
        }

        </div>
    )
}


export default ArrayUpdated;