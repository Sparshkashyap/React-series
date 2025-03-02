import useToggle from './useToggle';    
function Custom(){

    const [value,Togglevalue]=useToggle(false);



    return(

        <div style={{margin:"2rem"}}>


            <button onClick={Togglevalue}>ToggleButton</button>
            <button onClick={()=>Togglevalue(true)}>ShowText</button>
            <button onClick={()=>Togglevalue(false)}>HideText</button>
            
            {
                value?<h1>Custom Hook</h1>:null
            }


        </div>
    )
}

export default Custom;