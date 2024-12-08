import './App.css'
import Club from './Components/Club/Club';
import EatDrink from './Components/Eat&Drink/EatDrink';
import Footer from './Components/Footer'
import HomePage from './Components/HomePage'
import MyNavbar from './Components/Navbar'
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
         </Routes>
     <Footer/>
  </Router>
   </>
  )
}

export default App
