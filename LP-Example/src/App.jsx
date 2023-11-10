import React from "react";
import './App.css'
import MyNavbar from './modules/navbar/Navbar'
import About from './modules/about/About'
//import Landing from './modules/landing/Landing'
import Footer from './modules/footer/Footer'
import Hobbiess from './modules/hobbys/Hobbies.jsx'
import {ProfileContextProvider} from './context/profile-context.jsx';


function App() {
    return (
        <ProfileContextProvider>
            <div>
                < MyNavbar/>
                < About/>
                < Hobbiess/>
                < Footer/>
            </div>
        </ProfileContextProvider>
    )
}

export default App
