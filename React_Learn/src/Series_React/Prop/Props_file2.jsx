/* eslint-disable react/prop-types */


function User({ob}){

    console.log(ob);
    

    return(
        <>  
        <hr></hr>
        <h1>{ob.name}</h1>
        <h1>{ob.age}</h1>
        <h1>{ob.email}</h1>
        </>
    )
}

export default User;

export function User2({arr}){

    return(

        <h1>{arr[1]}</h1>

    )
}