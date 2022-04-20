import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form,Row,Col,Button} from 'react-bootstrap';

const transaction = () => {
    return(
        <Container className="d-flex justify-content-around w-100" style={{height:650}}>
            {/* <Row className=' justify-content-center align-items-center '>
                <Col xs={8} style={{}}>
                    <p >button</p>
                </Col>
                <Col xs={8}>
                    <p>button</p>
                </Col>
                <Col xs={8}>
                    <p>button</p>
                </Col>
            </Row> */}
            <Row className=' justify-content-center align-items-center '>
                <Col md={12}>
                    <p>轉帳</p>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    ); 
}
export default transaction;