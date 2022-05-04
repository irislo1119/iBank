import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form,Row,Col,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Size = {
    height:'590px'
}

const margin = {
    margin: "10px 0",
}

const label = {
    textDecoration:'none',
    color: "#6c757d",
}

const Register = () => {
    return(
        <Container className="d-flex justify-content-center align-items-center" style={Size}>
            <Row>
                <Col md={12}>
                    <Form>
                        <Form.Group style={margin} controlId="registerAccountName">
                            <Form.Label md={2}>帳號</Form.Label>
                            <Form.Control md={8} type="text" placeholder="Account Name" />
                        </Form.Group>
                        <Form.Group style={margin} controlId="registerPassword">
                            <Form.Label>密碼</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group style={margin} controlId="registerCheckPassword">
                            <Form.Label>確認密碼</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group style={margin} controlId="registerEmail">
                            <Form.Label>信箱</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group style={margin} controlId="registerPhoneNumber">
                            <Form.Label>電話號碼</Form.Label>
                            <Form.Control type="tel" placeholder="Phone Number" />
                        </Form.Group>
                        <Form.Group style={margin} controlId="registerSubmit">
                            <Link style={label} to="/Login">
                                <Button style={{margin: "10px 10px 10px 0"}} variant="outline-secondary">
                                    註冊</Button>                    
                                </Link>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    ); 
}
export default Register