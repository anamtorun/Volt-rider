import React from 'react';
import './HomeBanner.css';
import banner from '../../../assets/images/Banner.png';
import {Link} from 'react-router-dom';

const HomeBanner = () => {
    return (
        <div  className='container'>
            <div className='row'>
                <div className='col-lg-6'>
<h1  className= 'banner-title'>Emission Free and <br />
Explore With <br />
Electric Bike.</h1>
<Link to='/bikes'>
<button style={{marginTop:'100px'}} className='banner-button'>Get Started 🚴</button></Link>
                </div>
                <div className='col-lg-6'>
<img style={{width:"100%", marginTop:"80px"}} src={banner} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default HomeBanner;