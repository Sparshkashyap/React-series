/* eslint-disable react/prop-types */


function User({data}){

    return(

        <div style={{color:"darkblue",border:"2px solid darkgreen", borderRadius:"1rem" ,margin:"5px"}}>
        <h1>Name is :{data.name}</h1>
        <h1>Age is :{data.age}</h1>
        <h1>Email is :{data.email}</h1>
        </div>
      
    )
}


export default User;