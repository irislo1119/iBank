import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

var wall = {
    border: "1px solid #9E9E9E",
    // boxShadow: "3px 3px 7px #9E9E9E",
    margin:"0 10px"
}
const cardBodyHeight = {
    // height: "280px"
}
// const cardPadding = {
//     padding: '10px 10px 20px 10px',
// }
const textMargin = {
    marginTop: "15px",
    marginBottom: "4px",
}
const label = {
    // color: 'steelblue',
    textDecoration:'none'
}

const MyCard = () => {
    // <Col style={cardPadding}>

    // </Col>
    return(

        <Card border="light" style={wall}>
            <Card.Body style={cardBodyHeight}>
                <Card.Title>許靜sss玟</Card.Title>
                <Card.Text style={textMargin}>
                    系級：元智大學
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
    );
}

export default MyCard;