import { useContext } from 'react';
import { Context } from '../contexts/AuthContext'
import styles from './Perfil.module.css'
import editar from '../../public/img/editar.png'


function Perfil() {
    const { infoCliente, infoEmpresa } = useContext(Context);
    return (
        <>
            <div className={styles.container}>
                <h2>Informações Pessoais</h2>
                <div className={styles.containerInfo}>
                    <div className={styles.containerInfo1}>

                        <p><b> Nome:</b> {Object.keys(infoCliente).length === 0 ? infoEmpresa.nome : infoCliente.username} <img src={editar} width='25px'/></p>

                        <p style={{display:'flex'}}>{Object.keys(infoCliente).length === 0 ? <b>CNPJ: </b> : <b>CEP: </b>}  {Object.keys(infoCliente).length === 0 ? infoEmpresa.cnpj : infoCliente.cep}</p>

                        <p><b>Telefone:</b> {Object.keys(infoCliente).length === 0 ? infoEmpresa.telefone : infoCliente.telefone}</p>

                        <p><b>Email:</b> {Object.keys(infoCliente).length === 0 ? infoEmpresa.email : infoCliente.email}</p>

                    </div>

                    <div>
                        <p>TESTE</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Perfil