import React from 'react';

import './container.styling.scss'

import Menu from '../menu/menu.component'



class Container extends React.Component {
    constructor(){
        super()

        this.state = {
            menus:[
                {
                    title: "Shoes",
                    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cushion-shoes-7659-1584132587.jpg?crop=0.954xw:1.00xh;0.0288xw,0&resize=640:*",
                    id:"1"
                },
                {
                    title: "Dress",
                    url: "https://review.chinabrands.com/chinabrands/seo/image/20180913/wholesale%20boutique%20clothing.jpg",
                    id:"2"
                },
                {
                    title: "Jeans",
                    url: "https://i0.wp.com/www.savespendsplurge.com/wp-content/uploads/jeans-woman-shopping-bag-fashion-style.jpg?fit=534%2C800&ssl=1",
                    id:"3"
                },
                {
                    title: "Men",
                    url: "https://www.sss.gov/wp-content/uploads/2020/03/men-over-26.jpg",    
                    id:"4",
                    size:"large",
                },
                {
                    title: "Women",
                    url: "https://www.cdc.gov/ncbddd/hemophilia/features/images/women-posing-skyline-700px.jpg",
                    id:"5",
                    size: "large",
                }
            ]
        };

    };
    render(){
        return (
            <div className="container">
                {this.state.menus.map(
                    ({title,id,url,size})=>{
                        return(
                        <Menu title={title} key={id} image={url} size={size}></Menu>
                        )
                    }
                )}
            </div>
        )
    };
    
}

export default Container;