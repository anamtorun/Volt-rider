import React, { useEffect, useState } from 'react';
import HomeServices from '../../HomeServices/HomeServices';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import HomeBanner from '../HomeBanner/HomeBanner';
import faq from '../../../assets/images/faq.png';

import './Home.css';

const Home = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch('https://thawing-fortress-96942.herokuapp.com/bikes')
        .then(res => res.json())
        .then(data => setBikes(data))
    }, []);

    const allBikes = bikes.slice(0, 6);

    return (
        
        <div >
            
             <ul  class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            <Navbar/>
               <HomeBanner/>
               <div style={{paddingTop:"300px"}} className='container mt-4'>
                   <h2 style={{fontWeight:"900",paddingBottom:"30px"}} className='text-white text-center'>Get Premium Bikes 🏍</h2>
               <div className='bikes'>
               {
                   allBikes.map(bike => <HomeServices
                   key= {bike._id}
                   bike={bike}
                   ></HomeServices>)
               }
               </div>
               <h1 style={{color:"white",textAlign:"center",fontWeight:"bold",paddingBottom:"30px",paddingTop:"150px"}}>FAQ 💡 </h1>

<div>
<div className='row'>
                <div style={{paddingTop:"300px"}}  className='col-lg-6'>
                <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What are the advantages of e-bikes?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      E-bikes use rechargeable batteries that can travel up to 25 to 45 km/h, much faster than most people would cycle, getting you to your destination quicker and in better shape
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      How safe are they?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      While this is a legitimate concern with any sport, e-bikes are as safe as any other mode of transportation. Ultimately, there is always a risk when doing anything active. Still, if you observe the rules of the road, equipment, and personal safety, the risk levels of riding an e-bike are minimal
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Are electric bikes cost efficient?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      The electric bikes are also highly power-efficient, with motor efficiency lying above 90%. When you compare this number to a petrol engine, the efficiency you get is only 25% at max. With low running costs, high efficiency, and silent running, why not start choosing electric bikes over their petrol-powered counterpart.
      </div>
    </div>
  </div>
</div>
                </div>
                <div className='col-lg-6'>
<img style={{width:"100%", marginTop:"80px",paddingBottom:"80px"}} src={faq} alt="" />
                </div>
            </div>
</div>


               </div>
               
               <Footer/>
        </div>
    );
};

export default Home;