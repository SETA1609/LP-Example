import { useState } from 'react'
import './App.css'
import MyNavbar from './modules/navbar/Navbar'
import About from './modules/about/About'
//import Landing from './modules/landing/Landing'
import Footer from './modules/footer/Footer'
import Hobbys from './modules/hobbys/Hobbys'

function App() {
  return (
      <div>
	  < MyNavbar /> 
	  < About />
	  < Hobbys />
	  < Footer />
      </div>
  )
}

export default App
