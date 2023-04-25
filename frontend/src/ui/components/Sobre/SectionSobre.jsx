import Caixa from './CaixaTexto';
<<<<<<< HEAD
import styles from '../../styles/SectionSobre.module.css'
import teams from '../../../../public/teams.svg'
=======
import styles from '../../styles/SectionSobre.module.css';
import img from '../../../../public/teams.svg'

>>>>>>> parent of 989bc35 (Add files via upload)

const SectionSobre = () => {


    return (
<<<<<<< HEAD
        <>
            <div className={styles.dad}>
                <div className={styles.container}>
                    <div className={styles.esquerda} >
                        <img src={teams} />
                    </div>
                    <div className={styles.direita}>

                        <h1>Conectando pessoas e empresas na reciclagem.</h1>
                        <Caixa />
                    </div>
                </div>
            </div>
        </>
=======
        <div className={styles.sobre}>
            <div className={styles.sesquerda}>
                
                <div className={styles.simg}>
                        <img  style={{width: '500px', height: '500px'}} src={img}/>
                </div>
            </div>
            <div className={styles.sdireita}>
                <div className={styles.stitle}>
                    <h1>TITULO</h1>
                </div>
                <Caixa className={styles.scaixa}/>
            </div>
        </div>
>>>>>>> parent of 989bc35 (Add files via upload)
    );
};

export default SectionSobre;