/* eslint-disable react/prop-types */

function Wrapper({children,color}){

    console.log(color);
    

    return(

        <>
        <div style={{color:color,border:"5px solid black"}}>
            {children}
        </div>
        </>
    )
}


export default Wrapper;


export function Wrapper2({name="sparsh kashyap"}){
    return(
<>
<h1>{name}</h1>
</>
    )
}