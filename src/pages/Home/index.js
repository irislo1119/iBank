import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Carousel} from 'react-bootstrap';
import Mycarousel from "./components/carousel"
import Sea from './image/sea.jpeg';
// import Test from "./components/test"

const app = {
    padding:0,
    objectfit:'fill'
}
const rate = {
    height:250
}

const Home = () => {
    return(
        <Container className="border " fluid>
            <Row className="border">
                <Col className="d-flex justify-content-center align-items-center" xs={12} style={app}>
                    {/* <Mycarousel/> */}
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-flex w-100 "
                            src={Sea}
                            alt="First slide"
                            style={{height:300}}
                            />
                            {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-flex w-100 center"
                            src={Sea}
                            alt="Second slide"
                            style={{height:300}}
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row style={rate} className="border">
                <Col className="d-flex justify-content-center align-items-center" xs={12}>
                    <div>
                        <p>匯率</p>
                    </div>
                </Col>
            </Row>
        </Container>  
    ); 
}
export default Home;