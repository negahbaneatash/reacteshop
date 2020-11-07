import React from 'react'
import  './menu.styling.scss'
import Sticker from '../sticker/sticker.component'


function menuu(propert){
    return (
        <div className={`${propert.size} menu`}>
            <div className="photoEffect" style={{backgroundImage:`url(${propert.image})`}}/>
            <Sticker title={propert.title}></Sticker>
        </div>
    )
}

export default menuu;

