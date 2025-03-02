import DefaultProp from './Prop_file3.jsx';
import User, { User2 } from './Props_file2.jsx';
import Head from '../Header.jsx';

function Prop(){


    const ob={
    name:"Sparsh kashayp",
    age :20,
    email:"sparshkashyap655@gmail.com"
    }
    const ob1={
    name:"Sparsh kashayp",
    age :20,
    email:"sparshkashyap655@gmail.com"
    }

    const array=["IIT","NIT","IIIT","JEE"];

    return(
    // <User  name={name} age={age} email={email}/>
    <>
    <User ob={ob}/>
    <User ob={ob1}/>
    <User2 arr={array}/>
    <Head/>
    <DefaultProp/>
    </>
    )
}

export default Prop;