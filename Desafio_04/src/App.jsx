import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './Components/NavBar'
import PizzaBanner from './Components/PizzaBanner';
import Home from  './Views/Home'
import Footer from './Views/Footer'
import PizzaDetails from './Views/PizzaDetails'

import { CarritoProvider } from './Components/CarritoContext'; 


function App() {
  return (
    <CarritoProvider>
      <Router>
        <NavBar/>
        <PizzaBanner/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path="/pizza/:id" element={<PizzaDetails />} />
        </Routes>
        <Footer/>
      </Router>
    </CarritoProvider>
    
  )
}

export default App

