import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './frontend/components/Menu'
import Login from './frontend/pages/Login'
import Cadastro from './frontend/pages/Cadastro'
import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <Menu/>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
    </>
  )
}

export default App
