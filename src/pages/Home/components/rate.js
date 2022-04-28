import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import {Col,Card} from 'react-bootstrap';
import Usd from '../image/USD.jpeg';

const Rate = () => {
    const [uSDTWD, setUSDTWD] = useState("");
    const [hKDTWD, one] = useState("");
    const [tWDTWD, two] = useState("");

    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [rate,    setRate] =useState([]);
    const [currency, setCurrenies] = useState({
        first: ["TWD"],
        second: ["USD"]
        //,"CNY","EUR","HKD","THB","GBP","KRW","AUD","NZD"
    })
        // useEffect(() => {
        // axios({
        //     method: "GET",
        //     url: 
        //     `https://free.currconv.com/api/v7/convert?q=${currency.second}_TWD&compact=ultra&apiKey=c6b9fd7b28ff77cb1fe9`,
        // })
        //     .then((res) => {
        //         console.log(res.data);
        //         setFirst(`res.data.${currency.second}_TWD`);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
        // });
        // console.log(currency.second)
        // currency.second.map(element => {
        //     getRate("TWD",element)
        // });
    useEffect(() => {
        axios({
            method: "GET",
            url: [
            "https://free.currconv.com/api/v7/convert?q=USD_TWD&compact=ultra&apiKey=6c4e1f56bc8d2c9ea153",
        ]})
            .then((res) => {
                console.log(res.data);
                // setUSDTWD(res.data.USD_TWD);
                // one(res.data.HKD_TWD);
                two(res.data.TWD_TWD);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    const ImgSize = {
        width:'20%'
    }
    const cardPadding = {
        padding: '10px 10px 20px 10px',
        // margin: '-10px -10px -20px -10px',
        // height:'100px',
    }
    const cardMargin = {

    }
    return (
        // <p>1  = {rate[`${first}_${second}`]} TWD</p>
        <div>
            <Col xs={12} className="d-flex justify-content-center align-items-center" style={cardPadding}>
            <Card  className="text-end w-100 border" >
                    <Card.Body style={{margin:0,padding:'10px 0'}}>
                        <Card.Text className="text-center" >
                            <div>
                                <img src={Usd} style={ImgSize}></img>
                                <span style={{margin:'0 15px'}}>美元</span>
                                {/* <span>USD</span> */}
                                <span className="text-bottom"> 1 USD = {first}TWD</span>    
                            </div>
                        </Card.Text>
                    </Card.Body>
            </Card>          
        </Col> 
        </div> 
    );
}

export default Rate