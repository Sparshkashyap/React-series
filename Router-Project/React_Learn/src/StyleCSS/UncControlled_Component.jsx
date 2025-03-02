import { useRef } from "react";

function UnControlled_Style_Component(){

    const use=useRef();
    const usedob=useRef();
    
    const Handleinput=()=>{
        
        const name=document.getElementById("name").value;
        const DOB=document.getElementById("DOB").value;
        console.log(name);
        console.log(DOB);
        
    }
    const HandleinputRef=()=>{
        
       const name=use.current.value;
       const dob=usedob.current.value;
       console.log(name,dob);  
        
    }


    return(
        <div style={{margin:"2rem"}}>


            <h1>Uncontrolled_Components_Without_useRef</h1><br />
            <form >
                <input type="text" placeholder="Enter the name" id="name"/><br /><br />
                <input type="date" placeholder="Enter your DOB" id="DOB"/><br /><br />
                <button onClick={Handleinput}>ClickMe</button>
            </form>
                <br /><br />
            <h1>Uncontrolled_Components_used _useRef</h1><br />
            <form >
                <input type="text" placeholder="Enter the name" ref={use}/><br /><br />
                <input type="date" placeholder="Enter your DOB" ref={usedob}/><br /><br />
                <button onClick={HandleinputRef}>ClickMe</button>
            </form>



        </div>

    )

}



export default UnControlled_Style_Component;