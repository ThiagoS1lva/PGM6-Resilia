import styles from './Coleta.module.css';
import React, { useState, useEffect } from 'react';

function Coleta() {
    const [pontosDeColeta, setPontosDeColeta] = useState([]);
    const [consulta, setConsulta] = useState('');
  
    useEffect(() => {
      // Lógica para carregar os pontos de coleta
    }, []);
    
    return (
      <div className={styles.coleta}>
        <h1>Pontos de Coleta Reciclável</h1>
        <input type="text" placeholder="Digite o nome do bairro" value={consulta} onChange={(e) => setConsulta(e.target.value)} />
        <ul>
          {pontosDeColeta.map(ponto => (
            <li key={ponto.nome}>
              <h2>{ponto.nome}</h2>
              <p>{ponto.endereco}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  


export default Coleta;