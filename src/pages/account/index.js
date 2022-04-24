import 'bootstrap/dist/css/bootstrap.min.css';
import './account.css';
import { Container,Row,Col } from 'react-bootstrap';
import { useState } from "react";
import Member from './components/member';
import Balance from './components/balance';
import History from './components/history';

const app = {
    marginTop: "50px",
    marginBottom: "50px",
    height:'490px',

}

const Account = () => {
    const [page, setPage] = useState("AccountDetail");

    function ToAccountDetail() {
        setPage("AccountDetail");
    }
    function ToMemberProfile() {
        setPage("MemberProfile");
    }

    return(
        <Container className="d-flex justify-content-center align-item-center" style={app}>
            <Row >
                <Col xs={6}>
                    <p onClick={ToAccountDetail} className='mymember'>我的帳戶</p>
                </Col>
                <Col xs={6}>
                    <p onClick={ToMemberProfile} className='mymember'>會員資料</p>
                </Col >
                    {page === "AccountDetail" && <Balance />}
                    {page === "AccountDetail" && <History />}
                    {page === "MemberProfile" && <Member />}                        
            </Row>
{/* 
                <Tabs id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="account" title="我的帳戶">
                    </Tab>
                    <Tab eventKey="" title="會員資料" className='justify-content-center d-flex'>
                    </Tab>
                </Tabs> */}


        </Container>
    ); 
}
export default Account;