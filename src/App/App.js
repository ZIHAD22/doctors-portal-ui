import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import NavBar from '../Pages/Shared/NavBar'
import './App.css'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
