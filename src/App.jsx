import './App.css'
import {useState} from 'react'
import Carousel from './Components/Carousel'
import Chiilsbay from './Components/Chiilsbay'
import Footer from './Components/Footer'
import Galary from './Components/Galary'
import Hero from './Components/Hero'
import MyNavbar from './Components/Navbar'
import ThingsToDo from './Components/ThingsToDo'
import ImgSection from './ImgSection'



function App() {



  return (
    <>
   <MyNavbar/>
   <Hero/>
  <ImgSection/>
  <ThingsToDo/>
  <Chiilsbay/>
  <Carousel/>
  <Galary/>
  <Footer/>
    </>
  )
}

export default App
