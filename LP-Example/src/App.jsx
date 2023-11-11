import React from "react";
import './App.css'
import MyNavbar from './modules/navbar/Navbar'
import About from './modules/about/About'
import Landing from './modules/landing/Landing'
import Footer from './modules/footer/Footer'
import Hobbies from './modules/hobbys/Hobbies.jsx'
import {ProfileContextProvider} from './context/profile-context.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <ProfileContextProvider>
            <div className="cointainer">


                < MyNavbar/>

                < Landing/>
                < About/>
                < Hobbies/>
                < Footer/>


            </div>
        </ProfileContextProvider>
    )
}

export default App
