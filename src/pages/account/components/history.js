import {Col,Card} from 'react-bootstrap';

const history = () => {
    return (
        <Col md={10} style={{margin:'25px 0'}}>
            <Card  className="text-end">
                <Card.Header className="text-start">轉帳紀錄</Card.Header>
                    <Card.Body>
                        <Card.Text className="text-start">
                            9次
                        </Card.Text>
                        {/* <Button variant="outline-secondary" >詳細資訊</Button> */}
                    </Card.Body>
            </Card>                       
        </Col>
    );
}

export default history