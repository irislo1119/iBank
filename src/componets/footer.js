import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';

const footer=()=>{
    return(
        <Container className="justify-content-center d-flex border" fluid>
            <Row>
                <Col>聯絡我們：</Col>
            </Row>
        </Container>
    ); 
}
export default footer;