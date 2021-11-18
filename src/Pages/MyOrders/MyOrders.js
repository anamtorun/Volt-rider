import React, { useEffect, useState } from 'react';
import useFirebase from '../../hooks/useFirebase';

const MyOrders = () => {
    const [orders,setOrders] = useState([]);
    const {user} = useFirebase();
    useEffect(() => {
        fetch(`https://thawing-fortress-96942.herokuapp.com/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, []);
    return (
        <div>
            <h2>My Orders! </h2>
            {
                orders.map(order => <ul>
                    <li>{order.userName} ----------------------------------- {order.carName}</li>
                </ul> )
            }
        </div>
    );
};

export default MyOrders;