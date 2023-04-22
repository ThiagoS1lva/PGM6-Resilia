import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="icons">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
      </div>
      <ul>
        <h3>Recicla.ai</h3>
        <li>
          <p>
            Somos uma empresa que conecta pessoas que reciclam à empresas de reciclagem
          </p>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
