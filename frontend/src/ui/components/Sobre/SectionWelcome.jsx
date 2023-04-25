import { Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import img from '../../../../public/Recycling.gif';
import styles from '../../styles/SectionWelcome.module.css';


const SectionWelcome = ({ sobreRef }) => {


    return (
        <>
            <div className={styles.dad}>
                    <div className={styles.container}>
                        <div className={styles.esquerda}>
                            <div className={styles.title}><h1>Um jeito mais</h1> <h1>inteligente e consciente</h1> <h1>de lidar com os resíduos.</h1></div>
                            <HashLink to={sobreRef} smooth duration={1000}>
                                <Button className={styles.btn} variant="success" size="lg" >
                                    NOS CONHEÇA
                                </Button>
                            </HashLink>
                        </div>
                        <div className={styles.direita}>
                            <img className={styles.gif1} src={img}/>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default SectionWelcome;