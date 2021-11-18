import React from 'react';
import '../Bikes/Bikes.css';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import  { useEffect, useState } from 'react';
import HomeServices from '../../Pages/HomeServices/HomeServices';

const Bikes = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch('https://thawing-fortress-96942.herokuapp.com/bikes')
        .then(res => res.json())
        .then(data => setBikes(data))
    }, []);

    const allBikes = bikes.slice(0, 10);

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
               
               <div style={{paddingTop:"50px"}} className='container mt-4'>
                   <h2 style={{fontWeight:"900",paddingBottom:"30px"}} className='text-white text-center'>All Premium Bikes 🏍</h2>
               <div style={{paddingBottom:"200px"}} className='bikes'>
               {
                   allBikes.map(bike => <HomeServices
                   key= {bike._id}
                   bike={bike}
                   ></HomeServices>)
               }
               </div>
               

<div>

</div>


               </div>
               
               <Footer/>
        </div>
    );
        
        // <div>
        //     <Navbar></Navbar>
        //     <h1 className='Bike'>This is Bike</h1>







            
        //     <Footer></Footer>
        // </div>
   
};

export default Bikes;