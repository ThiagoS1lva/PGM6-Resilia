import { useState, useEffect } from 'react';
import styles from './EsquecerSenha.module.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

function EsquecerSenha() {
    const [cliente, setCliente] = useState(true);
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [password, setPassword] = useState('');

    function handleCliente() {
        setCliente(true);
    }
    function handleEmpresa() {
        setCliente(false);
    }

    const updateData = (event) => {
        let email1 = email

        const newData = {password}
        fetch(`http://localhost:3000/Cliente/red/${email1}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newData)
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log('Data updated:', data);
          })
          .catch(error => {
            console.error('There was a problem updating the data:', error);
          });
      };




    return (
        <div className={styles.container}>
            <h2>Redefina sua senha:</h2>
            <div className={styles.containerRedef}>

                {cliente ?
                    <div className={styles.btn}>
                        <Button variant='primary' onClick={handleCliente}>Cliente</Button>
                        <Button variant='outline-danger' onClick={handleEmpresa}>Empresa</Button>
                    </div>
                    : <div className={styles.btn}>
                        <Button variant='outline-primary' onClick={handleCliente}>Cliente</Button>
                        <Button variant='danger' onClick={handleEmpresa}>Empresa</Button>
                    </div>}

                <div className={styles.containerForm}>
                    <form onSubmit={updateData} className={styles.form}>
                        <label>Email:
                            <input type='email' value={email} required onChange={(event) => setEmail(event.target.value)}/>
                        </label>
                        {cliente ?
                            <label>CEP:
                                <input type='text' value={cep} onChange={(event) => setCep(event.target.value)} required/>
                            </label>
                            :
                            <label>CNPJ:
                                <input type='text' value={cnpj} onChange={(event) => setCnpj(event.target.value)} required/>
                            </label>}
                        <label>Nova senha:
                            <input type='password' value={password} onChange={(event) => setPassword(event.target.value)} required/>
                        </label>
                        <div className={styles.containerB}>
                            <button className={styles.botao}>Redefinir</button>
                            <Link to='/login'><button className={styles.botao}>Cancelar</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}
export default EsquecerSenha