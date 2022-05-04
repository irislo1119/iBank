import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Form,Row,Col,Button } from 'react-bootstrap';


const Transaction = () => {
    return(
        <Container className="d-flex justify-content-around w-100" style={{height:700}}>
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
                        <Form.Group className="mb-3" controlId="transactionEmail">
                            <Form.Label>轉出帳號</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="transactionText">
                            <Form.Text className="text-muted">
                            可用餘額 12345
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="transactionText">
                            <Form.Text className="text-muted">
                            ------------------------轉給------------------------
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="transactionEmail">
                            <Form.Label>轉入帳號</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="transactionAmount">
                            <Form.Label>轉入金額</Form.Label>
                            <Form.Control type="number" placeholder="Enter amount" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="transactionRemark">
                            <Form.Label>註記</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="transactionPassword">
                            <Form.Label>金融卡密碼</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <br></br>
                        <Form.Group className="mb-3" controlId="transactionCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            立即轉帳
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    ); 
}
export default Transaction;