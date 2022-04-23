import {Col,Card} from 'react-bootstrap';

const History = () => {
    return (
        <Col xs={12} style={{margin:'25px 0',width:'100%'}}>
            <Card  className="text-end">
                <Card.Header className="text-center">9次</Card.Header>
                    <Card.Body>
                        <Card.Text className="text-start">
                            轉帳紀錄
                        </Card.Text>
                        {/* <Button variant="outline-secondary" >詳細資訊</Button> */}
                    </Card.Body>
            </Card>                       
        </Col>
    );
}

export default History