import { Link, useParams } from "react-router";


function UserDetails(){


            const val=useParams();
            console.log(val.id);
            

   

        return(

            <>
            <div style={{marginLeft:"2rem"}}>

            <h1>User Details</h1> <br /><br />
            <h1>User id :{val.id}</h1>
            <h3><Link to="/users">Back</Link></h3>

            </div>

            </>
        )

}


export default UserDetails;