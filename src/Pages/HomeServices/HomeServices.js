import React from 'react';
import { Link } from 'react-router-dom';
import '../HomeServices/HomeServices.css';

const HomeServices = (props) => {
    const { name, img, description, price } = props.bike;
    return (
        <div className="cards">
            <img className='w-100 home-cards img-fluid' style={{}} src={img} alt='img'></img>
            <h5 className='text-white'>{name}</h5>
            <p className='text-white'>{description}</p>
            <p className='text-white'>{price}</p>
            <Link to={`/order/${name}`}><button className="but-on text-white">Order Now</button></Link>
            <br /><br /><br /><br /><br /><br />
        </div>

    );
};

export default HomeServices;