function Arithmatic_Op(){

    let x=20;
    let name="Sparsh";
    function fruit(){
        return "Apple";
    }
    const ob={
        user:"sparsh",
        age:20,
        location:"UP",
        email:"sparshkashyap655@gmail.com",
        condition:"true"
    }
    return(
        <>
        <h1>The value of X is : {x}</h1>
        <h1>The name is   : {name}</h1>
        <h1>The fruit is  : {fruit()}</h1>
        <h1>{ob.email}</h1>
        <input type="text" value={ob.user} />
        <h1>{ob.condition?"Successdfully Completed":"Failed"}</h1>
        </>
    )

};


export default Arithmatic_Op;