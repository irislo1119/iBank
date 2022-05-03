import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Form,Row,Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Background from "./image/bg.png"

const app = {
    height:590,
    backgroundImage: `url(${Background})`,
    backgroundSize:'100%',
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
}

const margin = {
    margin: "10px 0",
}

const label = {
    textDecoration:'none',
    color: "#6c757d",
}

const title = {
    color: "white",
    textAlign: "center",
    margin: "20px 0",
    fontSize: "42px",
}

const Login = () => {
    return(
        <Container style={app} className="d-flex justify-content-center align-items-center">
            <Row>
                <Col>
                    <h1 style={title}>Login</h1>
                    <Form className="w-90" xs={10}>
                        <Form.Group style={margin} controlId="registerAccountName">
                            <Form.Label xs={2}>帳號</Form.Label>
                            <Form.Control xs={8} type="text" placeholder="Account Name" />
                        </Form.Group>
                        <Form.Group style={margin} controlId="registerPassword">
                            <Form.Label>密碼</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group style={margin} controlId="registerAccountName">
                            <Link style={label} to="/Account">
                                <Button style={{margin: "10px 10px 10px 0"}} variant="outline-secondary" type="submit">
                                登入</Button>
                            </Link>
                        </Form.Group>
                        <Form.Group style={margin} controlId="registerAccountName">
                            <Link style={label} to="/Register">
                                <Button style={{margin: "10px 10px 10px 0"}} variant="outline-secondary">
                                    註冊</Button>                    
                                </Link>
                        </Form.Group>
                        <Form.Group style={margin} controlId="registerAccountName">
                            <Link style={label} to="/Transaction">
                                <Button style={{margin: "10px 10px 10px 0"}} variant="outline-secondary" type="submit">
                                轉帳</Button>
                            </Link>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    ); 
}
export default Login;