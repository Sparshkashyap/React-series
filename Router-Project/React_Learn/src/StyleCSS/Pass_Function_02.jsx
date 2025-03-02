/* eslint-disable react/prop-types */


function User({Fun,name}){


    return(
    
        <div style={{margin:"2rem"}}>
        <button onClick={()=>Fun(name)}>ClickMe</button>
        </div>

    )
}

export default User;