import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import google from '../../assets/images/google.png';
import './Login.css';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const {loginUser} = useFirebase();
  const onSubmit = data => {
    loginUser(data.email, data.password);
    alert('Login Done!');
    reset();
  };
    return (
        <div>
            <Navbar></Navbar>


           <div style={{padding: '150px'}} className="container">
             <h2 className='text-white title mt-4'>Welcome Back Riders! 🏍</h2>
           <form onSubmit={handleSubmit(onSubmit)}>
               <input className='m-3' placeholder=' Email' required {...register("email")} />
               <br />
               <input  className='m-3' placeholder=' Password' type='password' required {...register("password")} />
               <br />
               <input  className='m-3 common-btn' type="submit" value='Login' />
           </form>
           <br />
           or
           <br />
           <button className='common-btn'> <img style={{width: '20px', marginBottom: '2px'}} src={google} alt="" /> Google Sign In</button>

           <h5 className='text-white mt-4'>New User? Please <Link to='/register'>Register</Link> </h5> 
           </div>


            <Footer></Footer>
        </div>
    );
};

export default Login;