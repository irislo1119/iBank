import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form,Row,Col,Button} from 'react-bootstrap';

const register=()=>{
    return(
        <Container className="d-flex justify-content-center align-item-center" style={{height:650}}>
            <Row>
                <p>註冊</p>
                <Col md={10}>
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
                    </Form>
                </Col>
            </Row>
        </Container>
    ); 
}
export default register;