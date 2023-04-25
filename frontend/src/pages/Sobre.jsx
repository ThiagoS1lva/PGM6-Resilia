<<<<<<< HEAD
import SectionWelcome from '../ui/components/Sobre/SectionWelcome';
import SectionSobre from '../ui/components/Sobre/SectionSobre';
import SectionStaff from '../ui/components/Sobre/SectionStaff';
=======
import FuncionarioModels from '../ui/components/Sobre/FuncionarioModel';
import SectionWelcome from '../ui/components/Sobre/SectionWelcome';
import SectionSobre from '../ui/components/Sobre/SectionSobre';
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
>>>>>>> a2b01a7c5e3a322cd8654ff3229e74e74ac92e29


const Sobre = () => {
    
  return (
      <>
          <SectionWelcome/>
          <SectionSobre/>
<<<<<<< HEAD
          <SectionStaff/>
=======
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

>>>>>>> a2b01a7c5e3a322cd8654ff3229e74e74ac92e29
          
      </>
  );
};

export default Sobre 