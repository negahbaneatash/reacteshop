import React from 'react';
import './sticker.styling.scss'


const Sticker = ({title})=>{
    return (
        <div className="sticker">
            <div className='title'>{title}</div>
            <div className='message'>I want this</div>
            {console.log(title)}
        </div>
    )
}

export default Sticker;