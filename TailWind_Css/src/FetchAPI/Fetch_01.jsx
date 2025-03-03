import { useState } from "react";
import { useEffect } from "react";


function FetchAPI() {

    const [val, setval] = useState([]);

    useEffect(() => {

        getUserData()

    }, [])

    async function getUserData() {

        let url = "https://jsonplaceholder.typicode.com/users";
        let response = await fetch(url);
        let data = await response.json();
        setval(data.map((user) => user));
        console.log(data);



    }

    return (

        <>

            <div>

                <h1 className="FetchAPI">Fetch API using Get Method</h1><br /><br />
                <ul className="parent-header">
                    <li> {"ID"} </li>
                    <li> {"Name"} </li>
                    <li> {"Email"} </li>
                </ul><br /><br />  

                {
                    val.map((item) => (
                        <>
                            <ul className="parent">
                                <li > {item.id} </li>
                                <li className="li-child"> {item.name} </li>
                                <li className="li-child"> {item.email} </li>
                            </ul>

                        </>
                    ))
                }

            </div>

        </>

    )
}


export default FetchAPI;