/* eslint-disable react/prop-types */

function Create_data({set}){

    return(

        <div>
            <input type="text" placeholder="Enter the name" onChange={(val)=>set(val.target.value)}/>
        </div>
    )
}


export default Create_data;