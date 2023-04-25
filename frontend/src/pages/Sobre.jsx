import FuncionarioModels from '../ui/components/Sobre/FuncionarioModel';
import SectionWelcome from '../ui/components/Sobre/SectionWelcome';
import SectionSobre from '../ui/components/Sobre/SectionSobre';
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';


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
          <SectionWelcome/>
          <SectionSobre/>
          <Row>
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

          
      </>
  );
};

export default Sobre 