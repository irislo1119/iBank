import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";

const Rate = () => {
    const [uSDTWD, setUSDTWD] = useState("");

    useEffect(() => {
        axios({
            method: "GET",
            url: 
            "https://free.currconv.com/api/v7/convert?q=USD_TWD&compact=ultra&apiKey=6c4e1f56bc8d2c9ea153",
        })
            .then((res) => {
                console.log(res.data);
                setUSDTWD(res.data.USD_TWD);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <p>1 USD = {uSDTWD} TWD</p>
        </div>
    );
}

export default Rate