function Loop(){
    

    const arr=[
        {
            name:"sparsh",
            id:1,
            age:20,
            email:"sparsh@gmail.com"
        },
        {
            name:"aditya",
            id:2,
            age:21,
            email:"aditya@gmail.com"
        },
        {
            name:"radha",
            age:22,
            id:3,
            email:"radha@gmail.com"
        },
        {
            name:"krishna",
            age:25,
            id:4,
            email:"krishna@gmail.com"
        }
    ]

    return (
        <>
        <h1>Dumy Data</h1>
        <table border="2">
            <thead>
               <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Email</td>
                </tr>

            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>sparsh</td>
                    <td>sparsh@gamil.com</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Aditya</td>
                    <td>aditya@gmail.com</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Parul</td>
                    <td>Parul@gamil.com</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>sohan</td>
                    <td>sohan@gamil.com</td>
                </tr>
            </tbody>
        </table>
        <br />
        <h1>Loop in JSX</h1>
        <table border="2">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Email</td>
                </tr>
            </thead>
            <tbody>
                {
                    arr.map((e)=>(

                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td>{e.email}</td>
                        </tr>                        
                    
                    ))

                }
            </tbody>
        </table>
        </>
    )
}

export default Loop;