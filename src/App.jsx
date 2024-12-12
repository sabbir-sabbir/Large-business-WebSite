import './App.css'
import Club from './Components/Club/Club'
import Contact from './Components/ContactPage/Contact'
import EatDrink from './Components/Eat&Drink/EatDrink'
import Footer from './Components/Footer'
import HomePage from './Components/HomePage'
import MyNavbar from './Components/Navbar'
import Payment from './Components/PaymentPages/Payment'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {



  return (
   <>
  <Router>
     <MyNavbar/>
         <Routes>
          <Route path='/' element={ <HomePage/>} />
          <Route path='/drink' element={ <EatDrink/>} />
          <Route path='/club' element={ <Club/>} />
          <Route path='/card' element={ <Payment/>} />
          <Route path='/contact' element={ <Contact/>} />
         </Routes>
     <Footer/>
  </Router>
   </>
  )
}

export default App
