import React from 'react'
import './Benefits.css';
import  Tick from './Tick.png';
import Sample from './Sample.jpg';
export default function Benifits() {
    return (        

      <div className="page">  
        <div className="grid">
            <div className="sample">
                <img src={Sample} alt="Sample" height="500" width="450"/>
                </div>

        <div className="heading">
            <h6>WHY OUR PROGRAM</h6>
            <h1>Benefits</h1>
            <h4><span>Trekt is a product education platform. Trekt aims to empower</span><span>individuals to become Product Managers.</span></h4>
            <div className="container">
                <div classname="point">
                <img  className="image" src={Tick} alt="Tick" height="68" width="68" />
                <p className="text">Learn from real Product managers in the field.</p>
                </div>
                <div classname="point">
                <img src={Tick} alt="Tick" height="68" width="68"/>                
                <p className="text">Challenging and innovative product exercises.</p>
                </div>
                <div classname="point">
                <img src={Tick} alt="Tick" height="68" width="68"/>                
                <p className="text">Ways to ace product interviews</p>
                </div>
                <div classname="point">
                <img src={Tick} alt="Tick" height="68" width="68"/>
                <p className="text">The best product management content</p>
                </div>
            </div>
        </div>
        </div>
        </div>

    )
}
