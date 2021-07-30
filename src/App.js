
import React from 'react';
import Carousel from "react-elastic-carousel";
import Card from './components/Card';
import "./index.css";




export default function App(){
  const breakPoints = [
    {width: 1,itemsToShow:1},
    {width: 500,itemsToShow:2},
    {width: 768,itemsToShow:3},
    {width: 1200,itemsToShow:4}
  ]
  return(
    <div className="App">
    <h1 style={{textAlign:"left"}}>Features</h1>
    <p style={{textAlign:"left"}}>Our goal is to educate young professionals on product management</p>
    <Carousel breakPoints={breakPoints}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      
    </Carousel>

    </div>
  )
}
