import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
// import '../index.css';
const header=()=>{
    return(
        <Container style={{height:100}} className="border" fluid>
            <Row className="justify-content-center" style={{height:100 }} >
                <Col className="justify-content-top align-items-center d-flex" xs={6} >
                    <Link to="/" style={{textDecoration:'none',color:'black'}}>LOGO</Link>
                </Col>
                <Col className="justify-content-bottom align-items-center d-flex" xs={3}>
                    <Link to="/About" style={{textDecoration:'none',color:'black'}}>About</Link>
                </Col>
                <Col className="justify-content-bottom align-items-center d-flex" xs={2}>
                    <Link to="/Member" style={{textDecoration:'none',color:'black',}}>member</Link>
                </Col>
            </Row>
        </Container>
    ); 
}
export default header;