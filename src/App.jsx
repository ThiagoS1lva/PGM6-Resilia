import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './frontend/components/Menu'
import Login from './frontend/pages/Login'
import Cadastro from './frontend/pages/Cadastro'
import Perfil from './frontend/pages/Perfil'
import Home from './frontend/pages/Home.jsx'
import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './frontend/components/Footer'

import { AuthProvider } from './Context/AuthContext'

function App() {

  return (
    <>
      <AuthProvider>
        <Menu />
        <Routes>
          <Route path="perfil" element={<Perfil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App
