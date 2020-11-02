import React from 'react'
import './homepage.styling.scss'

const HomePage = ()=>{
    return (
<div className="homepage">    
    <div className="container">          
        <div className="menu">
          <div  className="sticker">
            <h1 className="title">Sneakers</h1>
            <span className="subtitle">I want</span>
          </div>
        </div>
        <div className="menu">
          <div  className="sticker">
            <h1 className="title">Tshirts</h1>
            <span className="subtitle">I want</span>
          </div>
        </div>
        <div className="menu">
          <div  className="sticker">
            <h1 className="title">Jeans</h1>
            <span className="subtitle">I want</span>
          </div>
        </div>
        <div className="menu">
          <div  className="sticker">
            <h1 className="title">Women</h1>
            <span className="subtitle">I want</span>
          </div>
        </div>
        <div className="menu">
          <div  className="sticker">
            <h1 className="title">Men</h1>
            <span className="subtitle">I want</span>
          </div>
        </div>      
    </div>
</div>  
    )
}

export default HomePage;