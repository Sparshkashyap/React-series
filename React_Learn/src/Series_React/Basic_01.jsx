// Default Export 

function Practice(){

    return(
      <>
      <h1>Sparsh kashyap</h1>
      </>
    )
  };
  
export default Practice;
  
// Named Export 
export function Fun(){

    return (
      <>
      <h1>First Component {sum()}</h1>
      <h1>Second Component</h1> 
      </>
    )
  };
  
  
  function sum(){
    return 20+20;
  }
  
export function Setting(){
  
    return(
      <ul>
        <li>Apple</li>
        <li>Bannana</li>
        <li>Pinaple</li>
      </ul>
    )
  }

