import { useRef } from "react";

function UseRefStyle(){

    const use=useRef(null);

    const Handleinput =()=>{
        use.current.style.color='blue'
        use.current.placeholder='Enter your DOB'
        use.current.style.fontsize='5rem'
        use.current.value='1234'
    }

    const HandleToggle=()=>{

        if(use.current.style.display!='none'){
            use.current.style.display='none';
        }
        else{
            use.current.style.display='inline';
        }
    }

    const HandleColor=()=>{
        use.current.style.color='green';
    }


    return(
        <div style={{marginTop:"2rem",paddingLeft:"2rem"}}>

        <input type="text" placeholder="Enter the Name" ref={use}/>
        <button onClick={Handleinput}>ClickMe</button>
        <br /><br /><br />
        <button onClick={HandleToggle}>Toggle</button>
        <br /><br />
        <h1 ref={use}>Sparsh kashyap</h1>
        <button onClick={HandleColor}>ChangeTextColor</button>

        </div>


    )
}



export default UseRefStyle;