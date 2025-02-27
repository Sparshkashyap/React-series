import { useState } from "react";

function Dynamic_Conditon() {

   
    const cardstyle={ 
        border: "2px solid black", 
        width: "14rem", 
        height: "25rem", 
        borderRadius: "1.19rem" ,
        color:"black",
        background:"white",
        boxShadow:""
      

    }

    const position={
        display:"flex",
        gap:"6rem",
        flexWrap:""
    }

    const [pos,setpos]=useState(position);

    const [textcolor, settextcolor] = useState(cardstyle);


    function set(tcolor){

        settextcolor({...textcolor,color:tcolor});
    }
    function setproperties(bgColorProper,shadow){
        
        settextcolor({...textcolor,background:bgColorProper,boxShadow:shadow});

    }


    function setposition(val){
        console.log(val);
        setpos({...pos,flexWrap:val});
    
    }
 



    return (

        <>

        <div style={{display:"flex",gap:"0.19rem"}}>
            <button onClick={()=>set("blue")}>ChangeTextColor</button>
            <button onClick={()=>set("")}>DefaultTextColor</button>
            <button onClick={()=>setproperties(" #a9bfff","3px 2px 10px 2.5px black")}>ChangeBackgroundColor</button>
            <button onClick={()=>setproperties("","")}>DefaultBackgroundColor</button>
            <button onClick={()=>setposition("wrap")}>ClickPosition</button>
            <button onClick={()=>setposition("")}>DefaultPosition</button>
        </div>

        <br />

        <div style={pos}>

            <div style={textcolor}>

                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?uid=R117000473&ga=GA1.1.343260500.1740581886&semt=ais_hybrid" alt="" style={{ width: "14rem", borderRadius: "1rem", borderBlockEnd: "2px solid #822f43" }} />
                <div style={{ paddingLeft: "2rem" }}>

                    <h3>Sparsh kashyap</h3>
                    <h3>BTech CSE </h3>
                    <h3>Software Developer</h3>
                </div>

            </div>

            <div style={textcolor}>

                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?uid=R117000473&ga=GA1.1.343260500.1740581886&semt=ais_hybrid" alt="" style={{ width: "14rem", borderRadius: "1rem", borderBlockEnd: "2px solid #822f43" }} />
                <div style={{ paddingLeft: "2rem" }}>

                    <h3>Sparsh kashyap</h3>
                    <h3>BTech CSE </h3>
                    <h3>Software Developer</h3>
                </div>

            </div>

            <div style={textcolor}>

                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?uid=R117000473&ga=GA1.1.343260500.1740581886&semt=ais_hybrid" alt="" style={{ width: "14rem", borderRadius: "1rem", borderBlockEnd: "2px solid #822f43" }} />
                <div style={{ paddingLeft: "2rem" }}>

                    <h3>Sparsh kashyap</h3>
                    <h3>BTech CSE </h3>
                    <h3>Software Developer</h3>
                </div>

            </div>
            <div style={textcolor}>

                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?uid=R117000473&ga=GA1.1.343260500.1740581886&semt=ais_hybrid" alt="" style={{ width: "14rem", borderRadius: "1rem", borderBlockEnd: "2px solid #822f43" }} />
                <div style={{ paddingLeft: "2rem" }}>

                    <h3>Sparsh kashyap</h3>
                    <h3>BTech CSE </h3>
                    <h3>Software Developer</h3>
                </div>

            </div>
            <div style={textcolor}>

                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?uid=R117000473&ga=GA1.1.343260500.1740581886&semt=ais_hybrid" alt="" style={{ width: "14rem", borderRadius: "1rem", borderBlockEnd: "2px solid #822f43" }} />
                <div style={{ paddingLeft: "2rem" }}>

                    <h3>Sparsh kashyap</h3>
                    <h3>BTech CSE </h3>
                    <h3>Software Developer</h3>
                </div>

            </div>
            <div style={textcolor}>

                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?uid=R117000473&ga=GA1.1.343260500.1740581886&semt=ais_hybrid" alt="" style={{ width: "14rem", borderRadius: "1rem", borderBlockEnd: "2px solid #822f43" }} />
                <div style={{ paddingLeft: "2rem" }}>

                    <h3>Sparsh kashyap</h3>
                    <h3>BTech CSE </h3>
                    <h3>Software Developer</h3>
                </div>

            </div>
            <div style={textcolor}>

                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?uid=R117000473&ga=GA1.1.343260500.1740581886&semt=ais_hybrid" alt="" style={{ width: "14rem", borderRadius: "1rem", borderBlockEnd: "2px solid #822f43" }} />
                <div style={{ paddingLeft: "2rem" }}>

                    <h3>Sparsh kashyap</h3>
                    <h3>BTech CSE </h3>
                    <h3>Software Developer</h3>
                </div>

            </div>
            <div style={textcolor}>

                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?uid=R117000473&ga=GA1.1.343260500.1740581886&semt=ais_hybrid" alt="" style={{ width: "14rem", borderRadius: "1rem", borderBlockEnd: "2px solid #822f43" }} />
                <div style={{ paddingLeft: "2rem" }}>

                    <h3>Sparsh kashyap</h3>
                    <h3>BTech CSE </h3>
                    <h3>Software Developer</h3>
                </div>

            </div>
            <div style={textcolor}>

                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?uid=R117000473&ga=GA1.1.343260500.1740581886&semt=ais_hybrid" alt="" style={{ width: "14rem", borderRadius: "1rem", borderBlockEnd: "2px solid #822f43" }} />
                <div style={{ paddingLeft: "2rem" }}>

                    <h3>Sparsh kashyap</h3>
                    <h3>BTech CSE </h3>
                    <h3>Software Developer</h3>
                </div>

            </div>
            <div style={textcolor}>

                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?uid=R117000473&ga=GA1.1.343260500.1740581886&semt=ais_hybrid" alt="" style={{ width: "14rem", borderRadius: "1rem", borderBlockEnd: "2px solid #822f43" }} />
                <div style={{ paddingLeft: "2rem" }}>

                    <h3>Sparsh kashyap</h3>
                    <h3>BTech CSE </h3>
                    <h3>Software Developer</h3>
                </div>

            </div>
            <div style={textcolor}>

                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?uid=R117000473&ga=GA1.1.343260500.1740581886&semt=ais_hybrid" alt="" style={{ width: "14rem", borderRadius: "1rem", borderBlockEnd: "2px solid #822f43" }} />
                <div style={{ paddingLeft: "2rem" }}>

                    <h3>Sparsh kashyap</h3>
                    <h3>BTech CSE </h3>
                    <h3>Software Developer</h3>
                </div>

            </div>
            <div style={textcolor}>

                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?uid=R117000473&ga=GA1.1.343260500.1740581886&semt=ais_hybrid" alt="" style={{ width: "14rem", borderRadius: "1rem", borderBlockEnd: "2px solid #822f43" }} />
                <div style={{ paddingLeft: "2rem" }}>

                    <h3>Sparsh kashyap</h3>
                    <h3>BTech CSE </h3>
                    <h3>Software Developer</h3>
                </div>

            </div>
            <div style={textcolor}>

                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?uid=R117000473&ga=GA1.1.343260500.1740581886&semt=ais_hybrid" alt="" style={{ width: "14rem", borderRadius: "1rem", borderBlockEnd: "2px solid #822f43" }} />
                <div style={{ paddingLeft: "2rem" }}>

                    <h3>Sparsh kashyap</h3>
                    <h3>BTech CSE </h3>
                    <h3>Software Developer</h3>
                </div>

            </div>
            <div style={textcolor}>

                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?uid=R117000473&ga=GA1.1.343260500.1740581886&semt=ais_hybrid" alt="" style={{ width: "14rem", borderRadius: "1rem", borderBlockEnd: "2px solid #822f43" }} />
                <div style={{ paddingLeft: "2rem" }}>

                    <h3>Sparsh kashyap</h3>
                    <h3>BTech CSE </h3>
                    <h3>Software Developer</h3>
                </div>

            </div>
            
            <div style={textcolor}>

                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?uid=R117000473&ga=GA1.1.343260500.1740581886&semt=ais_hybrid" alt="" style={{ width: "14rem", borderRadius: "1rem", borderBlockEnd: "2px solid #822f43" }} />
                <div style={{ paddingLeft: "2rem" }}>

                    <h3>Sparsh kashyap</h3>
                    <h3>BTech CSE </h3>
                    <h3>Software Developer</h3>
                </div>

            </div>
   
        </div>
    </>

        
    )


}

export default Dynamic_Conditon;