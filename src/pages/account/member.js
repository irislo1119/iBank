import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form,Row,Col,Tabs,Tab,Card,Button} from 'react-bootstrap';

const member = () => {
    return(
            <Col style={{margin:'10px 0',padding:'5px'}}  xs={12} >
                <Form >
                    <Form.Group  controlId="formBasicEmail">
                        <Form.Label>帳號</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>密碼</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>信箱</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>電話號碼</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <Button variant="outline-secondary" type="submit">
                        更新
                    </Button>
                </Form>
            </Col>
    ); 
}
export default member;