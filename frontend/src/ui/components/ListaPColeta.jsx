import styles from '../styles/ListaPColeta.module.css'
import { useContext, useState, useEffect } from 'react';
import { Context } from '../../contexts/AuthContext'
import { BsPencilSquare } from 'react-icons/bs';
import { CgRemoveR } from 'react-icons/cg';

function ListaPColeta() {
    const [pontosDeColeta, setPontosDeColeta] = useState([]);
    const { infoEmpresa } = useContext(Context);

    useEffect(() => {
        fetch(`http://localhost:3000/Coleta/cnpj/${(infoEmpresa.cnpj).toString()}`)
            .then(res => res.json())
            .then(data => setPontosDeColeta(data))
            .catch(error => console.error(error));
    }, [pontosDeColeta]);

    //Remover
    const removerPonto = async (id) => {
        console.log(id)
        try {
            const response = await fetch(`http://localhost:3000/Coleta/id/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                console.log('Ponto de coleta removido com sucesso!');
            } else {
                console.log('Erro ao remover o ponto de coleta');
            }
        } catch (error) {
            console.error(`Erro ao remover o ponto de coleta: ${error.message}`);
        }
    }

    return (
        <div className={styles.container}>
            <h2>Meus pontos de coleta</h2>
            <div className={styles.containerLista}>
                <ul>
                    {pontosDeColeta.map(ponto => (
                        <li key={ponto.ID}>
                            <p><b>Endereço:</b> {ponto.endereco}</p>
                            <p><b>Horário de funcionamento:</b> {ponto.horario_funcionamento}</p>
                            <p><b>Materiais recicláveis:</b> {ponto.materiais_reciclaveis}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <button><BsPencilSquare /></button>
                                
                                <button onClick={() => removerPonto(ponto.ID)}><CgRemoveR /></button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ListaPColeta;