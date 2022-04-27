import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,CardGroup } from 'react-bootstrap';
import { useState } from 'react';
import MyCard from './components/card.js';

const backGroundColor = {
    backgroundColor: "aliceblue",
    // backgroundColor: "rgba(120, 144, 165, 0.7)",
    // backgroundColor: "rgba(53, 71, 99, 0.7)",
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

const About = () => {
    const [members] = useState({
        name: ["許靜玟", "黃郁淇", "Name1", "Name2"],
        content: [
            "負責內容負責內容負責內容，負責內容負責內容1",
            "負責內容負責內容負責內容，負責內容負責內容2",
            "負責內容負責內容負責內容，負責內容負責內容3",
            "負責內容負責內容負責內容，負責內容負責內容4"
        ],
        gitHub: [
            "https://github.com/Chrissy1209",
            "https://github.com/Huang-joyce",
            "github link",
            "github link",
        ],
        email: [
            "chrissyhsu.i@gmail.com",
            "email link",
            "email link",
            "email link",
        ]
    })

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
                    {
                        members.name.map((item, index) => {
                            return <MyCard key={item} name={item} content={members.content[index]} gitHub={members.gitHub[index]} email={members.email[index]}/>
                        })   
                    }
                </CardGroup>
            </Row>
        </Container>
    ); 
}
export default About;