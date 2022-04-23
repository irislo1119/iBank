import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';
import Mycarousel from './components/carousel';
import Background from "./image/wave.png"

const app = {
    padding:0,
    display:'inline',
}
const rate = {
    height: 310,
}
const background = {
    backgroundImage: `url(${Background})`,
}
const Home = () => {
    return(
        <Container className="border " fluid style={background}>
            <Row className="border">
                <Col className=" justify-content-center align-items-center" xs={12} style={app}>
                    <Mycarousel/>   
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