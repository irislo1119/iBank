import React from 'react';
import Footer from './componets/footer';
import Header from './componets/header';
import { HashRouter,Route,Routes} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/login';
import About from './pages/about';
import Transaction from './pages/transaction';
import Register from './pages/register';
const App=()=>{
    return(
        <HashRouter>
            <Header/>
                <Routes>
                        <Route path="/" element={<Home />} exact/>
                        <Route path="/Login" element={<Login />} exact/>
                        <Route path="/Transaction" element={<Transaction />} exact/>
                        <Route path="/About" element={<About />} exact/>
                        <Route path="/Register" element={<Register />} exact/>
                </Routes>
            <Footer/>
        </HashRouter>    
    );
}
export default App;