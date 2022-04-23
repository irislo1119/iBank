import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,CardGroup,Card } from 'react-bootstrap';
import MyCard from './components/card';

const backGroundColor = {
    backgroundColor: "aliceblue",
}
const title = {
    // color: "steelblue",
    paddingTop: 30,
    textAlign: "center",
}
const text = {
    paddingBottom: 10,
    paddingTop: 10
}
var wall = {
    border: "1px solid #9E9E9E",
    // boxShadow: "3px 3px 7px #9E9E9E",
    margin:"0 10px"
}
const cardBodyHeight = {
    // height: "280px"
}
const cardPadding = {
    padding: '10px 10px 20px 10px',
}
const textMargin = {
    marginTop: "15px",
    marginBottom: "4px",
}
const label = {
    // color: 'steelblue',
    textDecoration:'none'
}
const About = () => {
    return(
        <Container fluid>
            <Row style={backGroundColor} className="d-flex justify-content-center align-item-center border">
                <Col xs={12}>
                    <h5 style={title} className="align-item-center">設計動機</h5>
                </Col>
                <Col xs={10}>
                    <p style={text}>成年後，有不少人開始會學習投資、管理自己的銀行帳號等。因此我們想要從生活出發，做一個簡易的銀行系統。</p>
                </Col>
            </Row>
            <Row className="border">
                <Col xs={12}>
                    <h5 style={title} className="align-item-center">關於我們</h5>
                </Col>
                <CardGroup>
                    <MyCard />
                    <MyCard />
                    <MyCard />
                    
                    {/* <Col xs style={cardPadding}>
                        <Card border="light" style={wall}>
                            <Card.Body style={cardBodyHeight}>
                                <Card.Title>許靜玟</Card.Title>
                                <Card.Text style={textMargin}>
                                    系級：元智大學資訊傳播學系  
                                </Card.Text>
                                <Card.Text>
                                    負責內容：負責內容負責內容負責內容，負責內容負責內容  
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    <span>GitHub: </span>
                                    <a href='https://github.com/Chrissy1209' style={label}>https://github.com/Chrissy1209</a>
                                </small>
                                <br></br>
                                <small>
                                    <span style={{color:"#6c757d"}}>Email: </span>
                                    <a href='mailto: chrissyhsu.i@gmail.com' style={label}>chrissyhsu.i@gmail.com</a>
                                </small>
                            </Card.Footer>
                        </Card>
                    </Col> */}
                    <Col xs style={cardPadding}>
                        <Card border="light" bg="light" style={wall}>
                            <Card.Body style={cardBodyHeight}>
                                <Card.Title>黃郁淇</Card.Title>
                                <Card.Text style={textMargin}>
                                    系級：元智大學資訊傳播學系  
                                </Card.Text>
                                <Card.Text>
                                    負責內容：  
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    <span>GitHub: </span>
                                    <a href='https://github.com/Huang-joyce' style={label}>https://github.com/Huang-joyce</a>
                                </small>
                                <br></br>
                                <small>
                                    <span style={{color:"#6c757d"}}>Email: </span>
                                    <a href='mailto: Email' style={label}>Email</a>
                                </small>
                            </Card.Footer>
                        </Card>
                    </Col>
                   
                    <Col xs style={cardPadding}>
                        <Card border="light" bg="light" style={wall}>
                            <Card.Body style={cardBodyHeight}>
                                <Card.Title>Name</Card.Title>
                                <Card.Text style={textMargin}>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    <span>GitHub: </span>
                                    <a href='url' style={label}>url</a>
                                </small>
                                <br></br>
                                <small>
                                    <span style={{color:"#6c757d"}}>Email: </span>
                                    <a href='mailto: Email' style={label}>Email</a>
                                </small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </CardGroup>
            </Row>
        </Container>
    ); 
}
export default About;