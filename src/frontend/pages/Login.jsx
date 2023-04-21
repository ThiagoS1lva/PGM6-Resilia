import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import LoginCarousels from '../components/Login/LoginCarousels';


function Login() {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.containerLogin}>
                    <h1>Login</h1>
                    <form className={styles.form}>
                        <label>Digite seu email</label>
                        <input type="email" placeholder="Digite seu email" />
                        <div className={styles.label}>
                            <label>Digite sua senha</label>
                            <Link to="/"><label style={{cursor
                            : "pointer"}}>Esqueceu sua senha?</label></Link>
                        </div>
                        <input type="password" placeholder="Digite sua senha" />
                        <p>Não tem uma conta?</p>
                        <Link to="/cadastre-se">Cadastre-se</Link>
                        <button role='button'>Logar</button>
                    </form>
                </div>

                <div className={styles.containerImage}>
                    <LoginCarousels/>
                </div>
            </div>
        </>
    )
}

export default Login;