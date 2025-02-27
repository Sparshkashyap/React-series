import { useRef } from "react";
import ForwardRef_Pass from "./ForwardRefProp_02";

function ForwardRef(){

    const useinput=useRef(null);

    const Handleinput=()=>{

        useinput.current.style.color="green";
        useinput.current.value=1000;
        useinput.current.focus();
        console.log("sparsh");
        

    }
    
    return(

        <div style={{margin:"2rem"}}>
            
           <ForwardRef_Pass ref={useinput} />
           <button onClick={Handleinput}>ClickMe</button>

        </div>
    )
}

export default ForwardRef;

