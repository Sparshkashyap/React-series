import { Link } from "react-router";

function UserNames(){

    const Array_object=[
        {
            id:1,
            name:"sparsh"
        },
        {
            id:2,
            name:"deepali"
        },
        {
            id:3,
            name:"peter"
        },
        {
            id:4,
            name:"Lucii"
        },
        {
            id:5,
            name:"John"
        },
        {
            id:6,
            name:"Sunita"
        },
    ]

        return(

            <>
            <div style={{marginLeft:"2rem"}}>

            <h1>UserNames List</h1>
            {
                Array_object.map((item)=>(
        
                    <Link to={"/users/"+item.id+"/"+item.name}><h2>{item.name}</h2></Link>
                ))
            }

            <h3><Link to="/user/home">back</Link></h3>

            </div>
            </>
        )

}


export default UserNames;