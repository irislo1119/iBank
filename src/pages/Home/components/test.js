import React from 'react';
import {Carousel} from 'react-bootstrap';
import Cat from "../image/cat.jpg";
// import Dog from "../image/dag.jpg";

const Test = () => {
  return (
    <Carousel fade>
        <Carousel.Item>
            <img
            style={{height:100}}
            className={"d-block w-100"}
            src={Cat}
            alt="First slide"
            />
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Item>
        <Carousel.Item>
            <img
            style={{height:100}}
            className={"d-block w-100"}
            src={Cat}
            alt="Second slide"
            />

            {/* <Carousel.Caption> */}
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            {/* </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
            <img
            style={{height:100}}
            className="d-block w-100"
            src={Cat}
            alt="Third slide"
            />

            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Item>
    </Carousel>
  );
}

export default Test