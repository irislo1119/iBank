import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,CardGroup,Card } from 'react-bootstrap';

const backGroundColor = {
    // backgroundColor: "aliceblue",
}
const label = {
    color: 'steelblue',
    textDecoration:'none'
}
const titlePadding = {
    padding: 20
}
const title = {
    color: "steelblue",
    paddingBottom: 15,
}
const about = () => {
    return(
        <Container fluid>
            <Row className="d-flex justify-content-center align-item-center" style={backGroundColor}>
                <Col md={11} className="border" style={titlePadding}>
                    <h5 style={title}>設計動機</h5>
                        <p>iBankiBankiBankiBankiBankiBank</p>
                    <h5 style={title}>目的</h5>
                        <p>iBankiBankiBankiBankiBankiBank</p>
                </Col>
                <Col md={11} className="border" style={titlePadding}>
                    <h5 style={title}>關於我們</h5>
                    <CardGroup>
                        <Card border="light">
                            <Card.Body>
                                <Card.Title>許靜玟</Card.Title>
                                <Card.Text>
                                    元智大學資訊傳播學系科技組：三年級  
                                </Card.Text>
                                <Card.Text>
                                    元智大學資訊傳播學系科技組：三年級  
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    <span>GitHub: </span>
                                    <a href='https://github.com/Chrissy1209' style={label}>https://github.com/Chrissy1209</a>
                                </small>
                            </Card.Footer>
                        </Card>
                        <Card border="light" bg="light">
                            <Card.Body>
                                <Card.Title>Name</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    <span>GitHub: </span>
                                    <a href='url' style={label}>url</a>
                                </small>
                            </Card.Footer>
                        </Card>
                        <Card border="light">
                            <Card.Body>
                                <Card.Title>Name</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    <span>GitHub: </span>
                                    <a href='url' style={label}>url</a>
                                </small>
                            </Card.Footer>
                        </Card>
                        <Card border="light" bg="light">
                            <Card.Body>
                                <Card.Title>Name</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    <span>GitHub: </span>
                                    <a href='url' style={label}>url</a>
                                </small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
        </Container>
    ); 
}
export default about;