// Footer.jsx
import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className='elements'>
        <ul> <h5>contato</h5>
          <li>
            <FaInstagram />Recicla.ai
          </li>
          <li>
            <FaLinkedin />Grupo-Reciclaai
          </li>
          <li>
            <FaEnvelope />Recicla.ai@gmail.com
          </li>
        </ul>   
        <p className='copy' >&copy; 2023 - Recicla ai</p>
        <ul>
          <h3>Recicla.ai</h3>
          <li>
            <p>
              Somos uma empresa que conecta pessoas que <br /> reciclam à empresas de reciclagem
              </p>
          </li>
        </ul>
     
      </div>
    </footer>
  );
}

export default Footer;
