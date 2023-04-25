
import SectionWelcome from '../ui/components/Sobre/SectionWelcome';
import SectionSobre from '../ui/components/Sobre/SectionSobre';
<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';


const Sobre = () => {
  const [funcionarios, setFuncionarios] = useState([]);

  //metodo get
  useEffect(() => {
    async function fetchFuncionarios() {
      const response = await fetch('http://localhost:3000/funcionarios');
      const data = await response.json();
      setFuncionarios(data);
      console.log(data);
    }
    fetchFuncionarios();
  }, []);

  return (
    <>
      <SectionWelcome />
      <SectionSobre />
      <Container style={{ marginTop: '2%' }}>
        <div style={{ display:'flex', margin: '0 auto 4% 12%'}}>
          <h2>Conheça nossa equipe: quem está por trás da nossa startup</h2>
        </div>
        <Row style={{ width: '100%' }}>
          {funcionarios.map(funcionario => (
            <Col key={funcionario.id} sm={6} md={4} >
              <FuncionarioModels
                rotafoto={funcionario.rotafoto}
                nome={funcionario.nome}
                cargo={funcionario.cargo}
              />
            </Col>
          ))}
        </Row>
      </Container>


    </>
=======
import SectionStaff from '../ui/components/Sobre/SectionStaff';


const Sobre = () => {
    
  return (
      <>
          <SectionWelcome/>
          <SectionSobre/>
          <SectionStaff/>
          
      </>
>>>>>>> parent of 989bc35 (Add files via upload)
  );
};

export default Sobre 