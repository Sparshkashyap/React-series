import { useState } from "react";

function ShowDay(){

    const [inputvalue,setvalue]=useState("");
    const [day,setday]=useState("");

    function HandleValue(e){

        setvalue(e.target.value);

    }

    function HandleClick(){
        setday(inputvalue);
    }





    return(
         <>
            {
                day === "1" ? <h2>Monday</h2> :
                day === "2" ? <h2>Tuesday</h2>:
                day === "3" ? <h2>Wednesday</h2>:
                day === "4" ? <h2>Thusday</h2>:
                day === "5" ? <h2>Friday</h2>:
                day === "6" ? <h2>Saturday</h2>:
                day === "7" ? <h2>Sunday</h2>:
                <h2>Please Enter Between(1-7)✅</h2>
                
            
            }

            <input type="text" value={inputvalue} onChange={HandleValue}/>
            <button onClick={HandleClick}>ClickMe</button>


        </>


    )
}

export default ShowDay;