import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import {Container,Form,Row,Col,Button} from 'react-bootstrap';

const register=()=>{
=======
import { Container,Form,Row,Col } from 'react-bootstrap';
const Size ={
    height:'590px'
}
const Register=()=>{
>>>>>>> 7a679949710018ee982a20d8bfe2b0dc1e212f27
    return(
        <Container className="d-flex justify-content-center align-item-center" style={Size}>
            <Row>
                <p>註冊</p>
                <Col md={10}>
<<<<<<< HEAD
                    <Form md={10}>
                        <Form.Group  controlId="registerAccountName">
                            <Form.Label md={2}>帳號</Form.Label>
                            <Form.Control md={8} type="text" placeholder="Account Name" />
                        </Form.Group>
                        <Form.Group controlId="registerPassword">
                            <Form.Label>密碼</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="registerCheckPassword">
                            <Form.Label>確認密碼</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="registerEmail">
                            <Form.Label>信箱</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="registerPhoneNumber">
                            <Form.Label>電話號碼</Form.Label>
                            <Form.Control type="text" placeholder="Phone Number" />
                        </Form.Group>
                        <Button variant="outline-secondary" type="submit">
                            註冊
                        </Button>
=======
                    <Form className="border w-90" md={10}>
                        
>>>>>>> 7a679949710018ee982a20d8bfe2b0dc1e212f27
                    </Form>
                </Col>
            </Row>
        </Container>
    ); 
}
export default Register;