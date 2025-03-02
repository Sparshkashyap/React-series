
import { useRef, useState } from "react";

function Derived(){

    const [users,setusers] = useState([]);
    const [user,setuser] =useState();

    const use=useRef();

    const Handleinput=()=>{

        setusers([...users,user]);
        use.current.value="";
        use.current.focus();
        use.current.placeholder="Enter the name";


    }

   const Total_user=users.length;
   const Last_user=users[users.length-1];
   const Unique_user=[...new Set(users)].length;


    

    return(
        <div style={{margin:"3rem"}}>
        <h1>Derived State in React js</h1><br /><br />
        <div>
            <h3>Total no of User : {Total_user}</h3>
            <h3>Last User : {Last_user}</h3>
            <h3>Unique User : {Unique_user  }</h3>
        </div>
        <br /><br />
        <input type="text" placeholder="Enter the name" onChange={(event)=>setuser(event.target.value)} ref={use}/>
        <button onClick={Handleinput} >Adduser</button><br /><br />
        {
            users.map((val,item)=>(            
                <div key={item}>
                    <h2>{val}</h2>
                </div>
            ))
            
        }

        </div>
    )
}



export default Derived;