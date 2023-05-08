import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from '../components/Login';
import Register from '../components/Register';
import Profile from '../components/Profile'

// tryto setup a  router :




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
