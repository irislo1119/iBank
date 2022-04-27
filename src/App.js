import React from 'react';
import { HashRouter,Route,Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//---
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/register';
import About from './pages/about';
import Transaction from './pages/transaction';
import Account from './pages/account';

const App = () => {
    return(
        <HashRouter>
            <Header/>
                {/* <Nav fill variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">我的帳戶</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/home">最新公告</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/home">重要活動</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>Disabled
                    </Nav.Link>
                    </Nav.Item>
                </Nav> */}
                <Routes>
                    <Route path="/" element={<Home />} exact/>
                    <Route path="/Login" element={<Login />} exact/>
                    <Route path="/Transaction" element={<Transaction />} exact/>
                    <Route path="/About" element={<About />} exact/>
                    <Route path="/Register" element={<Register />} exact/>
                    <Route path="/Account" element={<Account />} exact/>
                </Routes>
            <Footer/>
        </HashRouter>    
    );
}
export default App;