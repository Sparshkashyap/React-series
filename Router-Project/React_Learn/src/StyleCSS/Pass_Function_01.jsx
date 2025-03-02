import User from "./Pass_Function_02"

function PassFunction(){

    const Handleinput=(name)=>{
        alert(name)
    }    

    return(
        <div>
            <User  Fun={Handleinput} name="sparsh kashayp"/>
            <User  Fun={Handleinput} name="Anil kashayp"/>
            <User  Fun={Handleinput} name="Suraj kashayp"/>
            <User  Fun={Handleinput} name="Peter kashayp"/>
            <User  Fun={Handleinput} name="Luci kashayp"/>
          
          
        </div>
    )
}

export default PassFunction;