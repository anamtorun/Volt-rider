import React from 'react';
import { useForm } from 'react-hook-form';

const AddAProduct = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    {
        fetch('http://localhost:5000/bikes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
  }
    return (
        <div>
        <h2>Add A Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
           <input {...register("name")} placeholder=' Car Name' />
           <br />
           <input {...register("img")} placeholder=' Image URL' />
           <br />
           <input {...register("price")} type='number' placeholder=' Price' />
           <br />
           <input {...register("description")} placeholder=' Description' />
           <input type="submit" />
        </form>

        </div>
    );
};

export default AddAProduct;