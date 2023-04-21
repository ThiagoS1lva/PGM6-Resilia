import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import LoginCarousels from '../components/Login/LoginCarousels';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Login() {
    const [cliente, setCliente] = useState(true);

    function handleEmpresa() {
        setCliente(false);
    }
    function handleCliente() {
        setCliente(true);
    }

    return (
        <>
            <div className={styles.container}>
                {cliente ?
                    <div className={styles.containerLogin}>
                        <h1>Login</h1>
                        <div className={styles.btnCE}>
                            <Button onClick={handleCliente}>Cliente</Button>
                            <Button variant="outline-secondary" onClick={handleEmpresa}>Empresa</Button>
                        </div>
                        <form className={styles.form}>
                            <label>Digite seu email</label>
                            <input type="email" placeholder="Digite seu email" />
                            <div className={styles.label}>
                                <label>Digite sua senha</label>
                                <Link to="/"><label style={{
                                    cursor
                                        : "pointer"
                                }}>Esqueceu sua senha?</label></Link>
                            </div>
                            <input type="password" placeholder="Digite sua senha" />
                            <p>Não tem uma conta?</p>
                            <Link to="/cadastre-se">Cadastre-se</Link>
                            <button role='button'>Logar</button>
                        </form>
                    </div> 
                    
                    : 

                    <div className={styles.containerLogin}>
                        <h1>Login</h1>
                        <div className={styles.btnCE}>
                            <Button variant="outline-primary" onClick={handleCliente}>Cliente</Button>
                            <Button variant="secondary" onClick={handleEmpresa}>Empresa</Button>
                        </div>
                        <form className={styles.form}>
                            <label>Digite seu email</label>
                            <input type="email" placeholder="Digite seu email" />
                            <div className={styles.label}>
                                <label>Digite sua senha</label>
                                <Link to="/"><label style={{
                                    cursor
                                        : "pointer"
                                }}>Esqueceu sua senha?</label></Link>
                            </div>
                            <input type="password" placeholder="Digite sua senha" />
                            <p>Não tem uma conta?</p>
                            <Link to="/cadastre-se">Cadastre-se</Link>
                            <button role='button'>Logar</button>
                        </form>
                    </div> 
                    
                    
                    }


                <div className={styles.containerImage}>
                    <LoginCarousels />
                </div>
            </div>
        </>
    )
}

export default Login;