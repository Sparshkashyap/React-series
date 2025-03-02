import { Fragment } from "react";


function FragmentStyle() {

    return (

       <>
        <Data/>
        <Data/>
        <Data/>
        <Data/>
        <Data/>
        <Data/>
       </>
    )


}
export default FragmentStyle;


export function Data(){

    return(

        <Fragment>
            <h1>Radhe Radhe</h1>
        </Fragment>
    )


}

/*

=> NoUse div sai preventation ka liye <Fragment> </Fragment> component or <> </>
   use karta hai

*/