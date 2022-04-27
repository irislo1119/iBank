import {Col,Card} from 'react-bootstrap';

const Balance = () => {
    return (
        <Col xs={12} style={{margin:'-50px 0'}}>
            <Card  className="text-end">
                <Card.Header className="text-center" >9999</Card.Header>
                    <Card.Body>
                        <Card.Text className="text-start" style={{borderBottom: "1px solid darkgray"}}>
                            帳戶餘額
                        </Card.Text>
                    </Card.Body>
            </Card>                       
        </Col>
    );
}

export default Balance