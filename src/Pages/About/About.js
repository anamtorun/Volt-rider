import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import c1 from '../../assets/images/c1.jpg';
import c2 from '../../assets/images/c2.jpg';
import c3 from '../../assets/images/c3.jpg';
import { margin, padding } from '@mui/system';

const About = () => {
    return (
<div>
         <div className="container" >
            <Navbar></Navbar>
            <h1 style={{color:'white', textAlign:"center",paddingBottom:"50px"}}>ABout Us</h1>
            <h6 style={{color:'white' , paddingBottom:"100px"}}>Electric motorcycles promise the power you crave from a performance or production motorcycle – with a fraction of the environmental impact. Speed, but make it sustainable.As the years go by, we’re seeing EV motorcycles get faster, lighter, safer, and more intelligent. This year is no different: In our 2021 rankings, we have stylish motorcycles, motorbikes with AI and autonomous driving features, and the quickest recharge times we’ve yet seen. </h6>
            <div style={{marginBottom:"200px"}} className="container">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={c1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={c2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={c3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>

            </div>
        
            <Footer></Footer>
        </div>
        
    );
    
};

export default About;