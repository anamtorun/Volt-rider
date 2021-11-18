import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = (props) => {
    const { name, img, description, price } = props.service;
    return (
        <div className="cards">
            <img className='w-100 home-cards img-fluid' style={{}} src={img} alt='img'></img>
            <h5>{name}</h5>
            <p>{description}</p>
            <p>{price}</p>
            <Link to={`/order/${name}`}><button className="but-on">Order Now</button></Link>
            <br /><br /><br /><br /><br /><br />
        </div>


    );
};

export default Service;