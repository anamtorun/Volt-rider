import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import d from '../../assets/images/3d.png';

const Help = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div style={{paddingBottom:"150px"}} className='container'>
            <div className='row'>
                <div className='col-lg-6'>
<h6  className= 'banner-title'>In general, electric bikes last for three to five years. <br />
<br />
without proper maintenance will start to lose it’s efficiency.</h6>

                </div>
                <div className='col-lg-6'>
<img style={{width:"100%", marginTop:"150px"}} src={d} alt="" />
                </div>
            </div>
            
        </div>
    );

            <Footer></Footer>
        </div>
    );
};

export default Help;