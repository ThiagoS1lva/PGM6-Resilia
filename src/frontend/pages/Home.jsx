import styles from './Home.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';


function Home() {
    return(
<div>

        <div className={styles.parallax}>
            <Link to="/cadastro">
            <button className={styles.btn}>Cadastre-se</button>
            </Link>
            
        </div>
        <p>Espaçamento</p>
        <div className={styles.page}>
        <div className={styles.text}>
                    <p>Muito texto</p>
                    <img src="https://classic.exame.com/wp-content/uploads/2018/02/e-waste.jpg?quality=70&strip=info&w=1024"/>
                    
                    
                </div>
                <div className={styles.estatistica}>
                    <p>Espaçamento</p>
                    <h1>Estátistica da Empresa</h1>
                    Imagem 1, Imagem 2, Imagem 3
                </div>
                
                <div className={styles.conteudo}>
                    <p>Espaçamento</p>
                    <p>Alguma informação nacional sobre reciclagem</p>
                </div>
        </div>
</div>
      
    )
}

export default Home;
