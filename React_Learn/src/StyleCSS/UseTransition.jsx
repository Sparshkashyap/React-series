import { useTransition } from "react";

function UseTranstionFun() {

    const [pending, setpending] = useTransition();
    const Handlevalue = () => {
        setpending(
            async () => {
                await new Promise(res => setTimeout(res, 2000))
            }
        )
        console.log(pending);
        
    }



    return (

        <div style={{ margin: "2rem" }}>

            <h1>Use Transition</h1><br />
            {
                pending ?<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />:null

            }
            <button disabled={pending} onClick={Handlevalue}>Submit</button>
        </div>
    )
}

export default UseTranstionFun;