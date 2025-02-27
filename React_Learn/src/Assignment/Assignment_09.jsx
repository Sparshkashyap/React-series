/* eslint-disable react/jsx-key */
import User from "./Assignment_10";

function ReuseComponents(){
    const arr=[
        {
            name:"sparsh",
            id:1,
            age:20,
            email:"sparsh@gmail.com"
        },
        {
            name:"aditya",
            id:2,
            age:21,
            email:"aditya@gmail.com"
        },
        {
            name:"radha",
            age:22,
            id:3,
            email:"radha@gmail.com"
        },
        {
            name:"krishna",
            age:25,
            id:4,
            email:"krishna@gmail.com"
        }
    ]



    return(


       arr.map((e)=>(
        <User data={e}/>
       ))
        
    )
}


export default ReuseComponents;