import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
// import {Col,Card} from 'react-bootstrap';
import {CardGroup } from 'react-bootstrap';
import RateCard from './card';
import Usd from '../image/USD.jpeg';

const color = {
    backgroundColor: "rgba(255,255,255,0.4)",
    margin: 0,
}
const ImgSize = {
    width:'20%'
}
const cardPadding = {
    padding: '0 10px 25px',
    // margin: '-10px -10px -20px -10px',
    // height:'100px',
}

const Rate = () => {
    const [uSDTWD, setUSDTWD] = useState("");
    const [jPYTWD, setJPYTWD] = useState("");
    const [cNYTWD, setCNYTWD] = useState("");
    // const [eURTWD, setEURTWD] = useState("");
    // const [hKDTWD, setHKDTWD] = useState("");
    // const [tHBTWD, setTHBTWD] = useState("");
    // const [gBPTWD, setGBPTWD] = useState("");
    // const [kRWTWD, setKRWTWD] = useState("");
    // const [aUDTWD, setAUDTWD] = useState("");
    // const [nZDTWD, setNZDTWD] = useState("");
    function getUSA(){
        return axios.get('https://free.currconv.com/api/v7/convert?q=USD_TWD&compact=ultra&apiKey=c6b9fd7b28ff77cb1fe9');
       }
    function getJPY(){
        return axios.get('https://free.currconv.com/api/v7/convert?q=JPY_TWD&compact=ultra&apiKey=c6b9fd7b28ff77cb1fe9');
       }
    function getCNY(){
        return axios.get('https://free.currconv.com/api/v7/convert?q=CNY_TWD&compact=ultra&apiKey=c6b9fd7b28ff77cb1fe9');
       }
    // function getEUR(){
    //     return axios.get('https://free.currconv.com/api/v7/convert?q=EUR_TWD&compact=ultra&apiKey=6c4e1f56bc8d2c9ea153');
    //    }
    // function getHKD(){
    //     return axios.get('https://free.currconv.com/api/v7/convert?q=HKD_TWD&compact=ultra&apiKey=6c4e1f56bc8d2c9ea153');
    //    }
    // function getTHB(){
    //     return axios.get('https://free.currconv.com/api/v7/convert?q=THB_TWD&compact=ultra&apiKey=6c4e1f56bc8d2c9ea153');
    //    }
    // function getGBP(){
    //     return axios.get('https://free.currconv.com/api/v7/convert?q=GBP_TWD&compact=ultra&apiKey=6c4e1f56bc8d2c9ea153');
    //    }
    // function getKRW(){
    //     return axios.get('https://free.currconv.com/api/v7/convert?q=KRW_TWD&compact=ultra&apiKey=6c4e1f56bc8d2c9ea153');
    //    }
    // function getAUD(){
    //     return axios.get('https://free.currconv.com/api/v7/convert?q=AUD_TWD&compact=ultra&apiKey=6c4e1f56bc8d2c9ea153');
    //    }
    // function getNZD(){
    //     return axios.get('https://free.currconv.com/api/v7/convert?q=NZD_TWD&compact=ultra&apiKey=6c4e1f56bc8d2c9ea153');
    //    }
    axios.all([getUSA(),getJPY(),getCNY()])//,getEUR(),getHKD(),getTHB(),getGBP(),getKRW(),getAUD(),getNZD()
        .then(axios.spread(function(usa,jpy,cny){//,eur,hkd,thb,gbp,krw,aud,nzd
         //當這兩個請求都完成的時候會觸發這個函數，兩個引數分別代表返回的結果
         setUSDTWD(usa.data.USD_TWD);
         setJPYTWD(jpy.data.JPY_TWD);
         setCNYTWD(cny.data.CNY_TWD);
        //  setEURTWD(eur.data.EUR_TWD);
        //  setHKDTWD(hkd.data.HKD_TWD);
        //  setTHBTWD(thb.data.THB_TWD);
        //  setGBPTWD(gbp.data.GBP_TWD);
        //  setKRWTWD(krw.data.KRW_TWD);
        //  setAUDTWD(aud.data.AUD_TWD);
        //  setNZDTWD(nzd.data.NZD_TWD);
        }))
    const [country] =useState({
        name: ["USD","JPY","CNY"],//,"EUR","HKD","THB","GBP","KRW","AUD","NZD"
        rate: [uSDTWD,jPYTWD,cNYTWD],//,eURTWD,hKDTWD,tHBTWD,gBPTWD,kRWTWD,aUDTWD,nZDTWD
    })
    // useEffect(() => {
    //     axios({
    //         method: "GET",
    //         url: [
    //         "https://free.currconv.com/api/v7/convert?q=USD_TWD&compact=ultra&apiKey=6c4e1f56bc8d2c9ea153",
    //     ]})//c6b9fd7b28ff77cb1fe9
    //         .then((res) => {
    //             console.log(res.data);
    //             // setUSDTWD(res.data.USD_TWD);
    //             // one(res.data.HKD_TWD);
    //             two(res.data.TWD_TWD);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, [])

    return (
    //     <CardGroup>
        //     <Col xs={10} className="d-flex justify-content-center align-items-center" style={cardPadding}>
        //         <Card style={{backgroundColor: 'rgba(255,255,255,0.4)',}} className="text-end w-100 border">
        //             <Card.Body style={color}>
        //                 <Card.Text className="text-center" >
        //                         <img src={Usd} style={ImgSize}></img>
        //                         {/* <span style={{margin:'0 15px'}}>美元</span> */}
        //                         <span style={{margin:'0 15px'}} className="text-bottom"> 1 CNY = {cNYTWD}TWD</span> 
        //                 </Card.Text>
        //             </Card.Body>
        //         </Card>         
        //     </Col>
            // <Col xs={10} className="d-flex justify-content-center align-items-center" style={cardPadding}>
        //         <Card style={{backgroundColor: 'rgba(255,255,255,0.4)',}} className="text-end w-100 border">
        //             <Card.Body style={color}>
        //                 <Card.Text className="text-center" >
        //                         <img src={Usd} style={ImgSize}></img>
        //                         {/* <span style={{margin:'0 15px'}}>美元</span> */}
        //                         <span style={{margin:'0 15px'}} className="text-bottom"> 1 JPY = {jPYTWD}TWD</span> 
        //                 </Card.Text>
        //             </Card.Body>
        //         </Card>         
        //     </Col>
    //     </CardGroup>
        <CardGroup>
            {
                country.name.map((item, index) => {
                    return <RateCard key={item} name={item} rate={country.rate[index]}/>
                })   
            }
        </CardGroup>
    );
}

export default Rate