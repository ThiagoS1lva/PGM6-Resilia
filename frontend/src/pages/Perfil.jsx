import { useContext, useState, useEffect } from 'react';
import { Context } from '../contexts/AuthContext'
import styles from './Perfil.module.css'
import { BsFillPencilFill } from 'react-icons/bs';
import ListaPColeta from '../ui/components/ListaPColeta';


function Perfil() {
    const { infoCliente, infoEmpresa } = useContext(Context);
    const [endereco, setEndereco] = useState(null)
    const [materiaisReciclaveis, setMateriaisReciclaveis] = useState('');
    const [horarioFuncionamento, setHorarioFuncionamento] = useState('');
    const [endereco1, setEndereco1] = useState('');
    const [msg, setMsg] = useState('');


    if (Object.keys(infoCliente).length != 0) {
        useEffect(() => {
            fetch(`https://viacep.com.br/ws/${infoCliente.cep}/json/`)
                .then(response => response.json())
                .then(data => setEndereco(data))
                .catch(error => console.error(error));
        }, []);
    }

    const enviarColeta = async () => {
        try {
            const response = await fetch('http://localhost:3000/Coleta', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    materiais_reciclaveis: materiaisReciclaveis,
                    horario_funcionamento: horarioFuncionamento,
                    endereco: endereco1,
                    cnpj: (infoEmpresa.cnpj).toString()
                })
            });

            if (response.ok) {
                setMsg('Ponto de coleta cadastrado com sucesso!');
                setEndereco1('');
                setHorarioFuncionamento('');
                setMateriaisReciclaveis('');
                setTimeout(() => {
                    setMsg('');
                }, 5000);
            } else {
                setMsg('Erro ao cadastrar o ponto de coleta');
                setTimeout(() => {
                    setMsg('');
                }, 5000);
            }
        } catch (error) {
            console.error(`Erro ao enviar os dados: ${error.message}`);
        }
    };




    return (
        <>
            <div className={styles.container}>
                <h2>Informações Pessoais</h2>
                <div className={styles.containerInfo}>
                    <div className={styles.containerInfo1}>

                        <p><b> Nome:</b> {Object.keys(infoCliente).length === 0 ? infoEmpresa.nome : infoCliente.username} <BsFillPencilFill /></p>

                        <p style={{ display: 'flex' }}>{Object.keys(infoCliente).length === 0 ? <b>CNPJ: </b> : <b>CEP: </b>}  {Object.keys(infoCliente).length === 0 ? infoEmpresa.cnpj : endereco.cep}</p>

                        <p><b>Telefone:</b> {Object.keys(infoCliente).length === 0 ? infoEmpresa.telefone : infoCliente.telefone}</p>

                        <p><b>Email:</b> {Object.keys(infoCliente).length === 0 ? infoEmpresa.email : infoCliente.email}</p>

                    </div>

                    <div className={styles.containerInfoCEP}>
                        {Object.keys(infoCliente).length === 0 ?


                            <div className={styles.containerColeta}>
                                <h2>Adicionar ponto de coleta</h2>
                                <p style={{ color: 'green' }}>{msg}</p>
                                <div className={styles.formulario}>
                                    <label htmlFor="materiaisReciclaveis">Materiais Recicláveis:</label>
                                    <input type="text" id="materiaisReciclaveis" value={materiaisReciclaveis} onChange={e => setMateriaisReciclaveis(e.target.value)} />

                                    <label htmlFor="horarioFuncionamento">Horário de Funcionamento:</label>
                                    <input type="text" id="horarioFuncionamento" value={horarioFuncionamento} onChange={e => setHorarioFuncionamento(e.target.value)} />

                                    <label htmlFor="endereco">Endereço:</label>
                                    <input type="text" id="endereco" value={endereco1} onChange={e => setEndereco1(e.target.value)} />

                                    <button onClick={enviarColeta}>Enviar</button>
                                </div>
                            </div>


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
            {Object.keys(infoCliente).length === 0 ?
            <ListaPColeta /> : '' }
        </>
    );
};

export default Perfil