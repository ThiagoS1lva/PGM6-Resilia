import { Carousel } from 'react-bootstrap';
import img1 from '../../assets/carrossel/1.png';
import img2 from '../../assets/carrossel/2.png'
import img3 from '../../assets/carrossel/3.png'

function LoginCarousels() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                />
                <div style={{textAlign:'center'}}>
                    <h3>Second slide label</h3>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default LoginCarousels