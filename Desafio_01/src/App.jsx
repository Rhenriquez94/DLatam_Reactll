import { Route, Routes } from "react-router-dom";
import './App.css'

import Navbar from './Components/Navbar'
import Home from './View/Home'
import Contact  from './View/Contact'


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/Contact"
          element={<Contact />}
        />
      </Routes>

    </>
  )
}

export default App
