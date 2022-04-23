import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Col,Button} from 'react-bootstrap';

const Member = () => {
    return(
            <Col style={{margin:'10px 0',padding:'15px'}} xs={12}>
                <Form>
                    <p>User Name</p>
                    <Form.Group  controlId="formBasicEmail">
                        <Form.Label>帳號</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="1">
                        <Form.Label>密碼</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="3">
                        <Form.Label>電話號碼</Form.Label>
                        <Form.Control type="number" placeholder="Phone Number" />
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
export default Member;