
import { useState } from 'react';
import '/src/index.css';

function InputValidation() {

    const [nameError,setnameError] = useState();
    const [name,setname] = useState();

    const [passError,setpassError] = useState();
    const [pass,setpass] = useState();

    const Handlename=(event)=>{

        if(event.target.value.length > 5){

            setnameError("Plese Enter exactly or less than 5 Character");
            console.log("Plese Enter exactly or less than 5 Character");

        }
        else{

            setnameError("");
            setname(event.target.value)
        }
    }

    const Handlepass=(event)=>{

        let regex=/^[A-Z0-9]+$/i;

        if(!regex.test(event.target.value)){

            setpassError("Please Enter only Alphabets and Numbers");
            console.log("Please Enter only Alphabets and Numbers");

        }
        else{

            setpassError("");
            setpass(event.target.value);

        }
    }

    return (
        <>

            <div className="div-validation">
                <h1>Simple Validation Form</h1>
            </div>

            <div className='pa'>

                <label htmlFor="name">Enter your Name</label><br /><br />
                <input type="text" placeholder='Enter your name' id="name" className ={nameError ? "red-color" : ""} onChange={Handlename}/> <br /><br />
                <span className='red-color'>{nameError && nameError}</span><br />
                <label htmlFor="pass">Enter your Password </label><br /><br />
                <input type="text" placeholder='Enter your password' id="name" className ={passError ? "red-color" : ""} onChange={Handlepass} /><br /><br />
                <span className='red-color'>{passError && passError}</span>


                <button disabled={nameError || passError} className='name' onClick={()=>alert("Button alert")}>Login</button>

            </div>

        </>
    )
}


export default InputValidation;