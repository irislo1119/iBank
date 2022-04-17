import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form,Row,Col} from 'react-bootstrap';
const register=()=>{
    return(
        <Container className="d-flex justify-content-center align-item-center" style={{height:650}}>
            <Row>
                <p>註冊</p>
                <Col md={10}>
                    <Form className="border w-90" md={10}>
                
                    </Form>
                </Col>
            </Row>
        </Container>
    ); 
}
export default register;