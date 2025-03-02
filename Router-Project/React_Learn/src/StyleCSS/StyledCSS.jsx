import styled from 'styled-components' 
import {Button} from 'react-bootstrap';

function StyledCSSFun(){

    const Heading = styled.h1`

    color:purple;
    border:2px solid black;
    width:25rem;
    height:5rem;
    padding-left:4rem;
    font-size:3rem;
    border-radius:20px;

    
    
    `

    return(
        <>
        <h1>Styled CSS</h1>
        <Heading>Hello Buddy</Heading>
        <Heading>Hello Dost</Heading>
        <Heading>Radhe Radhe</Heading>
        <Heading>Radha Rani</Heading>
        <Heading>Hello girl</Heading>

        <button>ClickMe</button>
       <Button>ClikMe</Button>

        </>
    )
}

export default StyledCSSFun;