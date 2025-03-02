import {  Route, Routes } from 'react-router';
import Home from './Route_01';
import About from './Route_02';
import Login from './Route_03';
import Contact from './Route_04';
import '/src/Style/style.css'
import { College } from '../Nested_Route/College_paret_01';
import { Student } from '../Nested_Route/College_child_01';
import { Faculty } from '../Nested_Route/College_child_02';
import { Professor } from '../Nested_Route/College_child_03';
import NavBar from './AllLink';
import { PageNotFound } from './PageNotFound_05';
import UserNames from '../Dynamic_Route/Dynamic_Route_01';
import UserDetails from '../Dynamic_Route/Dynamic_Route_02';


function MainPage() {





    return (

        <>

            <Routes>

                <Route element={<NavBar />}>

                    <Route path='user'>

                    <Route path="/user/home" element={<Home />} />
                    <Route path="/user/about" element={<About />} />
                    <Route path="/user/login" element={<Login />} />
                    <Route path="/user/contact" element={<Contact />} />

                    </Route>

                </Route>

               
                <Route path="/users/list?" element={<UserNames/>} />
                <Route path="/users/:id/:name?" element={<UserDetails/>} />

                <Route path="/college" element={<College />} >
                    <Route  path="Student" element={<Student />} />
                    <Route path="Faculty" element={<Faculty />} />
                    <Route path="Professor" element={<Professor />} />

                </Route>

                <Route path="/*" element={<PageNotFound/>} />

            </Routes>
        </>
    )
}


export default MainPage;




