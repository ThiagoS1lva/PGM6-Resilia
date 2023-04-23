import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './src/ui/components/Menu'
import Login from './src/pages/Login'
import Cadastro from './src/pages/Cadastro'
import Perfil from './src/pages/Perfil'
import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './src/ui/components/Footer'
import Contatos from './src/pages/Contatos';
import { AuthProvider } from './src/contexts/AuthContext.jsx'

function App() {

  return (
    <>
      <AuthProvider>
        <Menu />
        <Routes>
          <Route path="perfil" element={<Perfil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App