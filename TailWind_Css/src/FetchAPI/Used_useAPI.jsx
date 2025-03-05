import { Suspense } from "react";
import { use } from "react";


const fetchData = fetch('https://dummyjson.com/users').then((res)=>res.json());

const userResource = fetchData;

export default function UserAPI(){
    

    return(
        <>
        <h1>USE===use====API</h1>
        <Suspense  fallback={<h1>Loading....</h1>}>
        <User   resource={userResource}/>
        </Suspense>

        </>
    )
}



export const User = ({resource})=>{

    const temp=use(resource);  
    console.log(temp);
    
    return(
        <div>
        <h1>User Data</h1>
        {
            temp.users.map((user)=>(

                <h3>{user.firstName}</h3>
            ))
        }
        </div>

    )
}

