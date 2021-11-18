import React from 'react';
import logo from '../../../assets/images/logo.png';
import './Footer.css';
import card from '../../../assets/images/card.png';

const Footer = () => {
    return (
        <div className='footer bg-warning'>
        <div className="container bg-warning">
            <div className="row">
                <div className="col">
                    <img className='logo-img' alt='logo' src={logo} />
                </div>
                <div className="col" style={{ marginTop: "75px",marginLeft: "20px", fontWeight:"bold" }}>
                    Home  <br />
                    Bikes <br />
                    About <br />
                    Help <br />
                    Login <br />
                </div>
                <div style={{ marginTop: "120px", fontWeight:"bold" }} className="col">
                    24/7 Avaialable <br />
                    01000000000
                </div>
               
            </div>
        </div>
        
    </div>
);
};

export default Footer;