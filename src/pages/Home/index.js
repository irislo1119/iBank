import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import Mycarousel from "./components/carousel"
// import Test from "./components/test"

const app = {
    height:300,
}
const rate = {
    height:250
}

const Home = () => {
    return(
        <Container className="border" fluid>
            <Row className="border">
                <Col className="d-flex justify-content-center align-items-center" md>
                    <Mycarousel />
                </Col>
            </Row>
            <Row style={rate} className="border">
                <Col className="d-flex justify-content-center align-items-center" md>
                    <div>
                        <p>匯率</p>
                    </div>
                </Col>
            </Row>
        </Container>  
    ); 
}
export default Home;