import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Carousel,Nav} from 'react-bootstrap';
import Background from "./image/dog.jpeg";
// Carousel 輪播圖片

const app = {
    height:300,
    background: `url(${Background}) 0 0 no-repeat`,
    backgroundSize: "100% 100%"
}

const rate = {
    height:250
}
const Home = () => {
    return(
        <Container className="border" fluid>
            {/* <Row style={{height:50}} className="border">
                <Col className="d-flex justify-content-center align-items-center" md>
                    <Nav>
                        <p>導覽列</p>   
                    </Nav>
                </Col>
            </Row> */}
            <Row style={app} className="border">
                <Col className="d-flex justify-content-center align-items-center" md> 
                    <Carousel>
                        <p>輪播</p>   
                    </Carousel>
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