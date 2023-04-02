import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {img, picture2, title, date, name,minutes} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='cart'>
                <div className='main-img'>
                    <div className='img1'>
                        <img src={picture2} alt="" />
                    </div>
                    <div className='tex'>
                        <h4>{name}</h4>
                        <p>{date}</p>
                    </div>
                </div>
                <div className='tapos'>
                    <p>{minutes} <span><FontAwesomeIcon icon={ faBookmark} /></span></p>
                </div>
            </div>
            <h2>{title}</h2>
            <a href="#">marks as link</a>
        </div>
    );
};

export default Product;