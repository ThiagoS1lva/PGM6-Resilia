import FuncionarioModels from '../ui/components/Sobre/FuncionarioModel';
import Caixa from '../ui/components/Sobre/CaixaTexo';
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
          <Navbar/>
          <Caixa/>
          <Row>
            {funcionarios.map(funcionario => (
              <Col sm={4}>
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