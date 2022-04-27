import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Form,Row,Col } from 'react-bootstrap';
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
                        <p>I'm form</p>
                        
                    </Form>
                    {/* <button>登入</button> */}
                    <Link to="/Account">登入</Link>
                    {/* <Link to="/Account">登入</Link> */}
                </Col>
            </Row>
        </Container>
    ); 
}
export default Login;