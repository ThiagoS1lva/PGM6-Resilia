import Caixa from './CaixaTexto';
import styles from '../../styles/SectionSobre.module.css';
import img from '../../../../public/teams.svg'


const SectionSobre = () => {


    return (
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
    );
};

export default SectionSobre;