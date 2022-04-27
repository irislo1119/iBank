import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';
import Mycarousel from './components/carousel';
import Rate from "./components/rate"
import Background from "./image/wave.png";

const app = {
    height:'590px'
}
const carousel = {
    padding:0,
}
const rate = {
    height: 288,
    backgroundImage: `url(${Background})`,
    backgroundSize:'110%',
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
}
const text ={
    textAlign:'center',
    margin:'30px 0',
}
const Home = () => {
    return(
        <Container className="border " fluid style={app}>
            <Row className="border">
                <Col className=" justify-content-center align-items-center" xs={12} style={carousel}>
                    <Mycarousel/>   
                </Col>
            </Row>
            <Row style={rate} className="border">
                <h3 style={text}>匯率查詢</h3>
                        <Rate />
                        <Rate />
                        <Rate />
                        <Rate />
                        <Rate />
            </Row>
        </Container>  
    ); 
}
export default Home;