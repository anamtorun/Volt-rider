import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAnAdmin = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    fetch('http://localhost:5000/users/admin', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                console.log(data);
            }
        })
  }
    return (
        <div className='container'>
            <h2>Make Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
           <input {...register("email")} placeholder=' Email' />
           <input type="submit" />
    </form>

        </div>
    );
};

export default MakeAnAdmin;