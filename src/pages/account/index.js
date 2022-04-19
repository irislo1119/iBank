import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const app = {
    height:650,
}

const account = () => {
    return(
        <Container className="d-flex justify-content-center align-item-center">
            <Row>
                <Col md={1}>
                    <p>帳戶餘額：９９９９</p>
                </Col>
                <Col md={1}>
                    <Link to="/Transaction">轉帳</Link>
                </Col>
                <Col md={1}>
                    <Link to="/History">轉帳記錄</Link>
                </Col>
                {/* <Col md={1} style={app}>
                    <Form className="border w-90" md={10}>
                        <p>I'm form</p>
                    </Form>
                </Col> */}
            </Row>
        </Container>
    ); 
}
export default account;