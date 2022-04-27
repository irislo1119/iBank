import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Form,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const app = {
    height:590,
}

const Login = () => {
    return(
        <Container className="d-flex justify-content-center align-item-center" style={app}>
            <Row>
                <Col md={1}>
                    <p>登入</p>
                </Col>
                <Col md={1} style={app}>
                    <Form className="border w-90" md={10}>
                    <Form.Group  controlId="registerAccountName">
                            <Form.Label md={2}>帳號</Form.Label>
                            <Form.Control md={8} type="text" placeholder="Account Name" />
                        </Form.Group>
                        <Form.Group controlId="registerPassword">
                            <Form.Label>密碼</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form>
                    {/* <button>登入</button> */}
                    <button variant="outline-secondary" type="login"><Link to="/Account">登入</Link></button>
                    {/* <Link to="/Account">登入</Link> */}
                    <button variant="outline-secondary" type="submit"><Link to="/Register">註冊</Link></button>
                </Col>
            </Row>
        </Container>
    ); 
}
export default Login;