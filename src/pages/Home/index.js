import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Carousel,Nav} from 'react-bootstrap';
// Carousel 輪播圖片

const app = {
    height:300
}

const carousel = {
    height:300
}
const Home = () => {
    return(
        <Container className="border" fluid>
            {/* <Row style={app} className="border">
                <Col className="d-flex justify-content-center align-items-center" md>
                    <div>
                        <p>我的帳戶</p>   
                    </div>
                </Col>
            </Row> */}
            {/* <Row style={{height:50}} className="border">
                <Col className="d-flex justify-content-center align-items-center" md>
                    <Nav>
                        <p>導覽列</p>   
                    </Nav>
                </Col>
            </Row> */}
            <Row style={carousel} className="border">
                <Col className="d-flex justify-content-center align-items-center" md> 
                    <Carousel>
                        <p>輪播</p>   
                    </Carousel>
                </Col>
            </Row>
        </Container>  
    ); 
}
export default Home;