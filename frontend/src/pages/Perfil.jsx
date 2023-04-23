import { useContext, useState, useEffect } from 'react';
import { Context } from '../contexts/AuthContext'
import styles from './Perfil.module.css'
import { BsFillPencilFill } from 'react-icons/bs';


function Perfil() {
    const { infoCliente, infoEmpresa } = useContext(Context);
    const [endereco, setEndereco] = useState(null)

    useEffect(() => {
        fetch(`https://viacep.com.br/ws/${infoCliente.cep}/json/`)
            .then(response => response.json())
            .then(data => setEndereco(data))
            .catch(error => console.error(error));
    }, []);


    return (
        <>
            <div className={styles.container}>
                <h2>Informações Pessoais</h2>
                <div className={styles.containerInfo}>
                    <div className={styles.containerInfo1}>

                        <p><b> Nome:</b> {Object.keys(infoCliente).length === 0 ? infoEmpresa.nome : infoCliente.username} <BsFillPencilFill/></p>

                        <p style={{ display: 'flex' }}>{Object.keys(infoCliente).length === 0 ? <b>CNPJ: </b> : <b>CEP: </b>}  {Object.keys(infoCliente).length === 0 ? infoEmpresa.cnpj : endereco.cep}</p>

                        <p><b>Telefone:</b> {Object.keys(infoCliente).length === 0 ? infoEmpresa.telefone : infoCliente.telefone}</p>

                        <p><b>Email:</b> {Object.keys(infoCliente).length === 0 ? infoEmpresa.email : infoCliente.email}</p>

                    </div>

                    <div className={styles.containerInfoCEP}>
                        {Object.keys(infoCliente).length === 0 ? 
                        
                        
                        <div>teste</div> 
                        
                    
                        :
                            endereco && (
                                <div className={styles.containerInfo2}>
                                    <p><b>Rua:</b> {endereco.logradouro}</p>
                                    <p><b>Bairro:</b> {endereco.bairro}</p>
                                    <p><b>Cidade:</b> {endereco.localidade}</p>
                                    <p><b>Estado:</b> {endereco.uf}</p>
                                </div>
                            )
                        }


                    </div>
                </div>

            </div>
        </>
    );
};

export default Perfil