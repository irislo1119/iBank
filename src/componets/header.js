import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
// import '../index.css';
const header=()=>{
    return(
        <Container style={{height:100}} className="border" fluid>
            <Row className="justify-content-center" style={{height:100 }} >
                <Col className="justify-content-top align-items-center d-flex" xs={8} >LOGO</Col>
                <Col className="justify-content-bottom align-items-center d-flex" xs={2}>About us</Col>
                <Col className="justify-content-bottom align-items-center d-flex" xs={2}>member</Col>
            </Row>
        </Container>
    ); 
}
export default header;