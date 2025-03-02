
import { useContext } from "react";
import { SubjectContext } from "./Create";


function Child_04(){

    const use=useContext(SubjectContext);

    return(
        <div style={{backgroundColor:"aqua",padding:"1rem",width:"58rem"}}>
            <h1> Subject Component: {use}</h1>
        </div>
    )
}


export default Child_04;