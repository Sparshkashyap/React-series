import { Suspense } from "react";
import { useState } from "react";
// import LazyLoading from "./LazyLoading_01";
import { lazy } from "react";



const LazyLoading = lazy(()=>import ('./LazyLoading_01'));

function LazyLoadingUser(){

    const [load,setload]=useState(false);

    return(

        <>
        <h1 className="h1">Lazy Loading</h1>
        {
            load ? <Suspense fallback={<h2>Loading ....</h2>}><LazyLoading/></Suspense>: null
        }
        {/* {
            load ? <LazyLoading/> : null
        } */}
        <div className="h2">
        <button onClick={()=>setload(!load)}>Submit</button>
        </div>
        </>
    )
}


export default LazyLoadingUser;