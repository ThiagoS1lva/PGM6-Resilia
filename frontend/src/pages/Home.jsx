import styles from './Home.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';


function Home() {
    return(
<div>

        <div className={styles.menu}>
            <div className={styles.sun}></div>
            <p className={styles.paragraph}>Reciclar não é uma tarefa<br/>difícil, é uma oportunidade,<br/> para fazer a diferença.</p>
            <Link to="/cadastro">
            <button className={styles.btn}>Cadastre-se</button>
            </Link>
        </div>
</div>

    )
}

export default Home;