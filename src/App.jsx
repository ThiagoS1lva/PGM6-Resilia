import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './frontend/components/Menu'
import Login from './frontend/pages/Login'
import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <Menu/>
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  )
}

export default App
