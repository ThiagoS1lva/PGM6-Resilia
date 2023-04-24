import { Button, Container, Jumbotron } from 'react-bootstrap';

const SectionWelcome = () => {
    return (
        <>
            <Jumbotron 
                fluid 
                className="d-flex align-items-center justify-content-center text-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                    marginBottom: 0,
                    color: '#fff',
                }}
            >
            <Container>
                <h1>NÓS SOMOS TAL EMPRESA</h1>
                <Button variant="primary" size="lg" href="#next-section">
                Scroll Down
                </Button>
            </Container>
            </Jumbotron>
        </>
    );
};

export default SectionWelcome;