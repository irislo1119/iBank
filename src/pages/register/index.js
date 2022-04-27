import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form,Row,Col,Button} from 'react-bootstrap';

const Size = {
    height:'590px'
}

const margin = {
    margin: "10px 0",
}

const Register=()=>{
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
                            <Form.Control type="text" placeholder="Phone Number" />
                        </Form.Group>
                        <Button style={margin} variant="outline-secondary" type="submit">
                            註冊
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    ); 
}
export default Register