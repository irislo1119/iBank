import {Col,Table} from 'react-bootstrap';

const History = () => {
    return (
        <Col xs={12} style={{margin:'-50px 0',height:'380px'}}>
            {/* <Card  className="text-end">
                <Card.Header className="text-center" >歷史轉帳記錄</Card.Header>
                    <Card.Body>
                        <Card.Text className="text-start" style={{borderBottom: "1px solid darkgray"}}>
                            dddddd
                        </Card.Text>
                    </Card.Body>
            </Card> */}
            <Table striped  hover>{/** bordered */}
                <thead>
                    <tr>
                        <th></th>
                        <th>收款帳號</th>
                        <th>轉帳金額</th>
                        <th>轉帳日期</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>aaaaaa</td>
                        <td>3000</td>
                        <td>2022-04-22</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>xxxxxx</td>
                        <td>20000</td>
                        <td>2022-04-24</td>
                    </tr>
                    
                </tbody>
            </Table>                       
        </Col>
    );
}

export default History