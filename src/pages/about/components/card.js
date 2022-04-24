import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Col } from 'react-bootstrap';
import { useState } from 'react';

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

const MyCard = ({ name, content, gitHub, email }) => {
    return(
        <Col xs style={cardPadding}>
            <Card border="light" style={wall}>
                <Card.Body style={cardBodyHeight}>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text style={textMargin}>
                        系級：元智大學資訊傳播學系
                    </Card.Text>
                    <Card.Text>
                        負責內容：{content}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <span>GitHub: </span>
                        <a href={gitHub} style={label}>{gitHub}</a>
                    </small>
                    <br></br>
                    <small>
                        <span style={{color:"#6c757d"}}>Email: </span>
                        <a href={"mailto:"+email} style={label}>{email}</a>
                    </small>
                </Card.Footer>
            </Card>        
        </Col>
    );
}

export default MyCard;