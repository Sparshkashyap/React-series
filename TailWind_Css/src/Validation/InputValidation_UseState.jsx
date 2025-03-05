import { useActionState } from 'react';
import '/src/index.css';

function InputValidation_UseState(){

    const Handleinput =(prevdata,formdata)=>{
        
        const  username=formdata.get('name');
        const  userpass=formdata.get('pass');
        // console.log(username,userpass);

        let regex=/^[A-Z0-9]+$/i;

        if(username.length > 6){

            return {error:"Name should not contain more than 5 characters❌",username,userpass};
        }   
        else if(!regex.test(userpass)){

            return {error:"Please Enter only Alphabetes and Numbers ❌",username,userpass}
        }
        else{

            return {message:"Login Successfully ✅"}
        }
        
    }

    
    const [data,form_action,pending]=useActionState(Handleinput);
   
    return(
             
        <>
        <h1 className="heading">Validation using UseactionState</h1> 
        <form action={form_action}>
        <div className='parent-div'>
            <label htmlFor="name">Enter the name :</label><br /><br />
            <input type="text" defaultValue={data?.username} placeholder="Enter your name" className="input-name" name='name' /><br /><br />
            <label htmlFor="pass">Enter the password :</label><br /><br />
            <input type="text" defaultValue={data?.userpass} placeholder="Enter your password" className="input-name" name='pass'/><br /><br />

            {
                data?.error && <span style={{color:"red"}}>{data?.error}</span>
            }

            {
                data?.message && <span style={{color:"green"}}>{data?.message}</span>
            }

            
        </div>
        </form>
        <br /><br /><button className="btn" disabled={pending} onClick={()=>alert('Login button ✅')}>Login</button>
        </>
    )
}

export default InputValidation_UseState;



