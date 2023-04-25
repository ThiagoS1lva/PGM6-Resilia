import { Button, Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import img from '../../../../public/Recycling.gif';
import styles from '../../styles/SectionWelcome.module.css';


const SectionWelcome = ({ sobreRef }) => {


    return (
        <>
            <div className={styles.dad}
            >
                    <Container className={styles.container}>
                        <div className={styles.esquerda}>
                            <div className={styles.title}><h1>Um jeito mais</h1> <h1>inteligente e consciente</h1> <h1>de lidar com os resíduos.</h1></div>
                            <HashLink to={sobreRef} smooth duration={1000}>
                                <Button className={styles.btn} variant="success" size="lg" >
                                    NOS CONHEÇA
                                </Button>
                            </HashLink>
                        </div>
                        <div className={styles.direita}>
                            <img className={styles.gif1} style={{width: '500px', height: '500px'}} src={img}/>
                        </div>
                    </Container>
            </div>
        </>
    );
};

export default SectionWelcome;