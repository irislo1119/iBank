import 'bootstrap/dist/css/bootstrap.min.css';
import './account.css';
import { Container,Row,Col } from 'react-bootstrap';
import { useState } from "react";
import Member from './components/member';
import Balance from './components/balance';
import Transfer from './components/transfer';
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
    function ToHistoryProfile() {
        setPage("HistoryProfile");
    }
    return(
        <Container className="d-flex justify-content-center align-item-top" style={app}>
            <Row >
                <Col xs={4}>
                    <p onClick={ToAccountDetail} className='myMember'>我的帳戶</p>
                </Col>
                <Col xs={4}>
                    <p onClick={ToMemberProfile} className='myMember'>會員資料</p>
                </Col >
                <Col xs={4}>
                    <p onClick={ToHistoryProfile} className='myMember'>歷史紀錄</p>
                </Col >
                    {page === "AccountDetail" && <Balance />}
                    {page === "AccountDetail" && <Transfer />}
                    {page === "MemberProfile" && <Member />}
                    {page === "HistoryProfile" && <History />}                            
            </Row>
            
        </Container>
    ); 
}
export default Account;