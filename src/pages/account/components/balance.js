import {Col,Card} from 'react-bootstrap';

const balance = () => {
    return (
        <Col md={10} style={{margin:'25px 0'}}>
            <Card  className="text-end">
                <Card.Header className="text-start" >帳戶餘額</Card.Header>
                    <Card.Body>
                        <Card.Text className="text-start">
                            9999
                        </Card.Text>
                        {/* <Button variant="outline-secondary">Success</Button>{' '} */}
                    </Card.Body>
            </Card>                       
        </Col>
    );
}

export default balance