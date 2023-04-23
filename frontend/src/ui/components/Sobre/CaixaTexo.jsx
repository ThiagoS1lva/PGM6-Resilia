// Importações de bibliotecas
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { BsPencilSquare, BsCheck2Square } from "react-icons/bs";


// Componente de caixa
const Caixa = () => {
  // Estado do conteúdo do caixa
  const [isAdmin, setIsAdmin] = useState(false);
  const [conteudo, setConteudo] = useState("<p>Conteúdo do site</p>");
  const [modoEdicao, setModoEdicao] = useState(false);
  
  // Busca o conteúdo do caixa no servidor
  const buscarConteudo = async () => {
    try {
      const response = await fetch("http://localhost:3000/sobre");
      const data = await response.json();
      setConteudo(data.conteudo);
    } catch (error) {
      console.error(error);
    }
  };

  // Função para atualizar o conteúdo do caixa no servidor
  const atualizarConteudo = async () => {
    try {
      const response = await fetch("http://localhost:3000/sobre", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ conteudo }),
      });
      const data = await response.json();
      console.log("Conteúdo atualizado com sucesso:", data);
      
      // altera o estado modoEdicao para false após atualizar o conteúdo
      setModoEdicao(false);

    } catch (error) {
      console.error("Erro ao atualizar conteúdo:", error);
    }
  };  

  useEffect(() => {
    if (isAdmin) {
      setModoEdicao(false);
    }
  }, [isAdmin]);

  const handleChange = (event) => {
    setConteudo(event.target.value);
  };

  const handleClick = () => {
    setModoEdicao(!modoEdicao);
  };

  const handleSelect = (event) => {
    const value = event.target.value;
    setIsAdmin(value === "admin");
  };

  useEffect(() => {
    buscarConteudo();
  }, []);

  // Renderiza o componente
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <Form.Group controlId="formBasicSelect">
            <Form.Label>Selecione o tipo de usuário:</Form.Label>
            <Form.Control as="select" onChange={handleSelect}>
              <option value="view">View</option>
              <option value="admin">Admin</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <div className="border p-3">
            {modoEdicao ? (<Form.Control as="textarea" value={conteudo} onChange={handleChange} />) : (<div dangerouslySetInnerHTML={{ __html: conteudo }} />
            )}
          </div>
        </Col>
      </Row>
      {isAdmin && (
        <Row className="my-4">
          <Col className="d-flex justify-content-end">
            {modoEdicao ? (
              <Button variant="success" onClick={atualizarConteudo}>
                <BsCheck2Square/>
              </Button>
            ) : (
              <Button variant="primary" onClick={handleClick}>
                <BsPencilSquare/>
              </Button>
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Caixa;