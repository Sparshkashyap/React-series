
import { useActionState } from "react";

function FormShow() {

    const Handledata = async (preciousdata, newdata) => {

        let name = newdata.get('name');
        let password = newdata.get('password');

        await new Promise(res => setTimeout(res, 2000));

        
        if (name && password) {

            return { message: "Data Submited Successfully ✅",name:name,password:password }
        }
        else {
            return { error: "Failed Data Submittion ❌",name:"",password:"" }
        }

    


    }

    const [data, action, pending] = useActionState(Handledata, undefined);

    


    return (

        <div style={{ margin: "2rem" }}>

            <h1>Show Form Submitted</h1><br />
            <form action={action}>

                <input type="text" placeholder="Enter your name" name="name" /><br /><br />
                <input type="password" placeholder="Enter your password" name="password" /><br /><br />
                <button disabled={pending}>Submit</button> <br /><br />

                

            </form>

            <div style={{fontSize:"1rem"}}>

                {
                    data?.error && <span style={{color:"red"}}>{data?.error}</span>
                }
                {
                    data?.message && <span style={{color:"green"}}>{data?.message}</span>
                }

            </div><br /><br />

                <h2>Name is :{data?.name}</h2> <br /><br />
                <h2>Password is :{data?.password}</h2>



          


        </div>

    )
}

export default FormShow;