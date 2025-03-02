
import { useRef } from 'react';
import {useFormStatus} from 'react-dom';


function UseFormStatusRef(){

    const HandleDelay= async()=>{
       await new Promise(ref=>setTimeout(ref,2000));
      
       
    }

    const usename=useRef();
    const usepassword=useRef();

    const Value=()=>{

        const name=usename.current.value;
        const password=usepassword.current.value;
        console.log(name);
        console.log(password);
        


    }

    function CustomSubmit(){

        const {pending}=useFormStatus();
        console.log(pending);
    
        return(
        
            <div>
                <input type="text" placeholder='Enter the name' ref={usename}/><br /><br />
                <input type="password" placeholder='Enter the password' ref={usepassword}/> <br /><br />
                <button disabled={pending} onClick={Value}> {pending ? 'Submitting...':'Submit'}</button>
            </div>
        )
    }

    return(

        <div style={{margin:"2rem"}}>

            <form action={HandleDelay}>
                <CustomSubmit/>
            </form>

        </div>
    )
}


export default UseFormStatusRef;