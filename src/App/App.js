import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Footer from '../Pages/Shared/Footer'
import NavBar from '../Pages/Shared/NavBar'
import './App.css'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
