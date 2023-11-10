import React from "react";
import './App.css'
import MyNavbar from './modules/navbar/Navbar'
import About from './modules/about/About'
//import Landing from './modules/landing/Landing'
import Footer from './modules/footer/Footer'
import Hobbys from './modules/hobbys/Hobbys'
import {ProfileContextProvider} from './context/profile-context.jsx';


function App() {
    return (
        <ProfileContextProvider>
            <div>
                < MyNavbar/>
                < About/>
                < Hobbys/>
                < Footer/>
            </div>
        </ProfileContextProvider>
    )
}

export default App
