import styles from './Coleta.module.css';
import React, { useState, useEffect } from 'react';

function Coleta() {
  const [pontosDeColeta, setPontosDeColeta] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/Coletas`)
      .then(res => res.json())
      .then(data => setPontosDeColeta(data))
      .catch(error => console.error(error));
  }, [pontosDeColeta]);

  return (
    <div className={styles.coleta}>
      <h1>Pontos de coleta de Recicláveis</h1>
      <div className={styles.search}>
        <input type="text" placeholder="Digite o nome do bairro" />
        <button>Buscar</button>
      </div>
      <div className={styles.cards}>
        {pontosDeColeta.map(ponto => (
          <div key={ponto.id} className={styles.card}>
            <p><b>Endereço:</b> {ponto.endereco}</p>
            <p><b>Material:</b> {ponto.materiais_reciclaveis}</p>
            <p><b>Horário:</b> {ponto.horario_funcionamento}</p>
            <p><b>CNPJ:</b> {ponto.cnpj}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coleta;