/* eslint-disable react/prop-types */

function ForwardRef_Pass(props){

    return(
        <div>
          <input type="text" ref={props.ref} placeholder="Enter the name"/><br /><br />
        </div>
    )
}



export default ForwardRef_Pass;