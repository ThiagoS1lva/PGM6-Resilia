// react, bootstrap,
import Card from 'react-bootstrap/Card';

const FuncionarioModels = (props) => {
    //foto card 286x180
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ props.rotafoto } />
      <Card.Body>
        <Card.Title>{ props.nome }</Card.Title>
        <Card.Title>{ props.cargo }</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default FuncionarioModels;