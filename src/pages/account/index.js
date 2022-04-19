import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form,Row,Col,Tabs,Tab,Card,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Member from './member';
import S from './account.css';
const app = {
    margin:'50px 0'
}

const account = () => {
    return(
        <Container className="d-flex justify-content-center align-item-center" style={app}>
            <Row>
                <Tabs id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="account" title="我的帳戶">
                        <Col md={10} style={{margin:'25px 0'}}>
                            <Card  className="text-end">
                                <Card.Header className="text-start" >帳戶餘額</Card.Header>
                                    <Card.Body>
                                            <Card.Text className="text-start">
                                                9999
                                            </Card.Text>
                                            <Button variant="outline-secondary">Success</Button>{' '}
                                    </Card.Body>
                            </Card>                       
                        </Col>
                        <Col md={10} style={{margin:'25px 0'}}>
                            <Card  className="text-end">
                                <Card.Header className="text-start">轉帳紀錄</Card.Header>
                                    <Card.Body>
                                            <Card.Text className="text-start">
                                                9次
                                            </Card.Text>
                                        <Button variant="outline-secondary" >詳細資訊</Button>
                                    </Card.Body>
                            </Card>                       
                        </Col>
                    </Tab>
                    <Tab eventKey="member" title="會員資料" className='justify-content-center d-flex '>
                        <Member />
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    ); 
}
export default account;