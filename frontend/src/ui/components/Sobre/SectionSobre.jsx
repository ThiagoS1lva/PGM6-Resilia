import Caixa from './CaixaTexto';
<<<<<<< HEAD
import styles from '../../styles/SectionSobre.module.css';
import img from '../../../../public/teams.svg'
=======
>>>>>>> a2b01a7c5e3a322cd8654ff3229e74e74ac92e29


const SectionSobre = () => {


    return (
<<<<<<< HEAD
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
=======
        <>
            
                <Caixa/>
                <div>
                    
                </div>
        </>
>>>>>>> a2b01a7c5e3a322cd8654ff3229e74e74ac92e29
    );
};

export default SectionSobre;