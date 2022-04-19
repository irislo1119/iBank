import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
const about=()=>{
    return(
        <Container className="d-flex justify-content-center align-item-center" style={{height:650}}>
            <Row className="w-100 d-flex justify-content-center">
                <Col md={11} className="border">
                    <p>about 網頁動機 理念</p>
                </Col>
                <Col md={11} className="border">
                    <p>團隊成員</p>
                </Col>
            </Row>

        </Container>
    ); 
}
export default about;