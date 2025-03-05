import { useReducer } from "react";


function UseReducer() {
    
    let obj={

        name:'',
        age:'',
        location:'',
        city:'',
        email:''
    }

    const reducer =(state,action)=>{

        return ({...state,[action.type]:action.val});

    }

    const [state,dispatch] = useReducer(reducer,obj);


    return (
        <>
            <h1 className="usereducer-h1">useReducer in React: Efficient State Management for Complex Logic</h1>

            <div className="usereducer-div">

                <label htmlFor="nam" className="label">Enter the Name </label><br />
                <input onChange={(e)=>dispatch({val:e.target.value,type:'name'})}
                type="text" id="nam" placeholder="Enter your name" className="re" /><br /><br />
                <label htmlFor="age" className="label">Enter the Age</label><br />
                <input onChange={(e)=>dispatch({val:e.target.value,type:'age'})}
                type="text" id="age" placeholder="Enter your age" className="re" /><br /><br />
                <label htmlFor="location" className="label">Enter the Location </label><br />
                <input onChange={(e)=>dispatch({val:e.target.value,type:'location'})}
                type="text" id="location" placeholder="Enter your location" className="re" /><br /><br />
                <label htmlFor="email" className="label">Enter the Email </label><br />
                <input onChange={(e)=>dispatch({val:e.target.value,type:'email'})}
                 type="text" id="email" placeholder="Enter your email" className="re" /><br /><br />
                <label htmlFor="city" className="label">Enter the City </label><br />
                <input onChange={(e)=>dispatch({val:e.target.value,type:'city'})}
                 type="text" id="city" placeholder="Enter your city" className="re" /><br /><br />
                <button className="btn" onClick={() =>console.log(state)}>Submit Data</button>

            </div>
           <form action="">
            <ul className="ul-list">
                <li>Name is : {state.name}</li><br />
                <li>Age is : {state.age}</li>  <br />
                <li>Location is : {state.location}</li>  <br />
                <li>City is : {state.city}</li>  <br />
                <li>Email is : {state.email}</li>  
            </ul>
           </form>



        </>
    )
}


export default UseReducer;