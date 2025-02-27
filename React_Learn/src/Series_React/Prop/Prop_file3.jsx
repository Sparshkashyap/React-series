/* eslint-disable no-global-assign */
import Wrapper, { Wrapper2 } from "./Prop_file4";
import Head from "../Header";

function DefaultProp(){

    return(
        <>
        <Wrapper2 />
        <Wrapper2 name="sparsh"/>
        <Wrapper2 name="Anil Sidu"/>
        <Head/>
        <Wrapper>
            <h2>{name="sparsh"}</h2>
        </Wrapper>
        <Wrapper>
            <h2 style={{color:"darkblue"}}>{name="Raghu"}</h2>
        </Wrapper>
        <Wrapper>
            <h1>Please Login Carefully</h1>
            <h2 style={{color:"yellow"}}>{name="sparsh kashyap"}</h2>
        </Wrapper>

        </>
        


    )
}


export default DefaultProp;