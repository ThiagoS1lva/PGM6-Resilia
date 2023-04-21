import styles from './Login.module.css';

function Login () {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.containerLogin}>
                    <h1>Login</h1>
                </div>

                <div className={styles.containerImage}>
                    <h1>Imagens</h1>
                </div>
            </div>
        </>
    )
}

export default Login;