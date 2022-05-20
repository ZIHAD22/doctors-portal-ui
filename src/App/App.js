import { Route, Routes } from 'react-router-dom'
import Appointment from '../Pages/Appointment/Appointment'
import Home from '../Pages/Home/Home'
import Footer from '../Pages/Shared/Footer'
import NavBar from '../Pages/Shared/NavBar'
import 'react-day-picker/dist/style.css'
import './App.css'
import SignUp from '../Pages/SignIn/SignIn'

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
