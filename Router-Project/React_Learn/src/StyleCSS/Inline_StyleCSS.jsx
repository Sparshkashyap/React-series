function InlineStyle(){
    const ob={
        margin:"5px"
    }

    const ob1={
        color:"blue",
        border:"2px solid purple",
        borderRadius:"1rem",
        width:"200px",
        height:"100px",
        display:"flex",
        justifyContent:"center",
        boxShadow:"1px 2.2px 2.8px 2.9px black"
    }


    return(
    
<div style={ob}>
        <div style={ob1}>
            <h1>Inline CSS</h1>
        </div>
         <br />
        <div style={{border:"2px solid black",width:"14rem",height:"25rem",borderRadius:"1.19rem"}}>
    
            <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?uid=R117000473&ga=GA1.1.343260500.1740581886&semt=ais_hybrid" alt="" style={{width:"14rem" ,borderRadius:"1rem"}}/>
            <div style={{paddingLeft:"2rem"}}>
                
            <h3>Sparsh kashyap</h3>
            <h3>BTech CSE </h3>
            <h3>Software Developer</h3>
            </div>

        </div>
</div>
        
        
    )
};


export default InlineStyle;
