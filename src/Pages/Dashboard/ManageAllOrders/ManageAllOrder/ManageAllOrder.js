import React, { useEffect, useState } from 'react';
import axios from 'axios';
const ManageAllOrder = ({order}) => {
    const { p_name, email, id,orderStatus, projectname, price, username, image, orderDate, _id, imageupload, location} = order;

    const handelShip= id => {
        const url = `https://agile-atoll-48938.herokuapp.com/orders/${id}`;
            axios.put(url, {
                orderStatus: "Shipped"
              })
          }
    const handelDelete = id => {
        const url = `https://agile-atoll-48938.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('successfully deleted');
                    }
                })
    }
    return (
        <div class="col">
        <div class="card mb-3 text-dark">
            <div class="row g-0">
                <div class="col-md-4">
                    {
                        imageupload ? <img src={`data:image/png;base64,${image}`}  class="img-fluid rounded-start w-100 h-100" alt="..." />:<img src={image}  class="img-fluid rounded-start w-100 h-100" alt="..." />
                    }
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h2>Order Details</h2>
                        <h5 class="card-title">{p_name}</h5>
                        <p className='p-0 m-0'>Price: {price} $</p>
                        <p className='p-0 m-0'>Rent By: {email}</p>
                        <p class="card-text">Status : <span className='text-danger'>{orderStatus}</span></p>
                        <button onClick={() => handelDelete(_id)} className='codepickjs-btn'>Cancle Rent</button>
                        <button onClick={() => handelShip(_id)} className='codepickjs-btn ms-3'>Approve Rent</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ManageAllOrder;