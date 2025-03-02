
import { BrowserRouter } from 'react-router';
import MainPage from '../src/Series_Router/Routes/Normal_Route/Route_main';
import './Style/style.css';


function App() {

    return (

        <>
            <BrowserRouter>

                <MainPage />
              

            </BrowserRouter>

        </>
    )
}


export default App;