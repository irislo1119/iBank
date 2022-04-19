import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Sea from "../image/sea.jpeg";
import Cat from "../image/cat.jpg";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={Sea} onDragStart={handleDragStart} role="presentation" />,
  <img src={Cat} onDragStart={handleDragStart} role="presentation" />,
  <img src={Sea} onDragStart={handleDragStart} role="presentation" />,
  <img src={Sea} onDragStart={handleDragStart} role="presentation" />,
];

const Gallery = () => {
  return (
    <AliceCarousel mouseTracking items={items}/>
  );
}

export default Gallery