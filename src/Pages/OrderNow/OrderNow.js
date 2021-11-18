import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import Navbar from '../Shared/Navbar/Navbar';

const OrderNow = () => {
    const { register, handleSubmit, reset } = useForm();
    const [alert, setAlert] = useState(false);
    const {user} = useFirebase();
    const {carname} = useParams();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAlert(true);
                    reset();
                }
            })
    };
    return (
        <div>
            <Navbar/>
          
          <div className='container'>
            <h2 className='text-center text-white'>Order Here!</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className='text-white me-3'>Car Name: </label>
                <input {...register("carName")} value={carname} />
                <br></br>
                <label className='text-white me-3'>Full Name: </label>
                <input {...register("userName")} />
                <br></br>
                <label className='text-white me-3'>Email: </label>
                <input {...register("email")} value={user.email} />
                <br></br>
                <label className='text-white me-3'>Address: </label>
                <input {...register("address")} />
                <br></br>
                <label className='text-white me-3'>Phone: </label>
                <input type="number" {...register("phone")} />
                <br></br>
                <input type="submit" />
            </form>
            {
                alert && <h1 className='text-white'>Order Placed!</h1>
            }
        </div>

        </div>
    );
};

export default OrderNow;