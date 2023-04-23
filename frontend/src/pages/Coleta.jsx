import styles from './Coleta.module.css';
import React, { useState, useEffect } from 'react';

function Coleta() {
  const [pontosDeColeta, setPontosDeColeta] = useState([]);
  const [consulta, setConsulta] = useState('');
  const [busca, setBusca] = useState('');

  useEffect(() => {
    // Carregar os pontos de coleta
    fetch("/http://localhost:3000/Coletas")
      .then(response => response.json())
      .then(data => setPontosDeColeta(data))
      .catch(error => console.error(error));
  }, []);

  const handleBusca = () => {
    setConsulta(busca);
  };

  return (
    <div className={styles.coleta}>
      <h1>Pontos de Coleta Reciclável</h1>
      <div className={styles.search}>
        <input type="text" placeholder="Digite o nome do bairro" value={busca} onChange={(e) => setBusca(e.target.value)} />
        <button onClick={handleBusca} disabled={!busca}>Buscar</button>
      </div>
      <div className={styles.cards}>
        {pontosDeColeta.map(ponto => (
          <div key={ponto.id} className={styles.card}>
            <h2>{ponto.materiais_reciclaveis}</h2>
            <p>{ponto.endereco}</p>
            <p>{ponto.horario_funcionamento}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coleta;