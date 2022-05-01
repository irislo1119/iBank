import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Col } from 'react-bootstrap';
import { useState } from 'react';
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
const RateCard = ({ name, rate }) => {
    return(
        <Col xs={10} className="d-flex justify-content-center align-items-center" style={cardPadding}>
            <Card style={{backgroundColor: 'rgba(255,255,255,0.4)',}} className="text-end w-100 border">
                <Card.Body style={color}>
                    <Card.Text className="text-center" >
                            <img src={Usd} style={ImgSize}></img>
                            {/* <span style={{margin:'0 15px'}}>美元</span> */}
                            <span style={{margin:'0 15px'}} className="text-bottom"> 1 {name} = {rate}TWD</span> 
                    </Card.Text>
                </Card.Body>
            </Card>          
        </Col> 
    );
}

export default RateCard;