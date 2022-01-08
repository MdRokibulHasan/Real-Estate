import React from 'react';
import useOrders from '../../../../hooks/useOrders';
import Order from '../Order/Order';

const Orders = () => {
    const { spinner, orders } = useOrders()
    return (
        <div>
               {
                spinner && <div class="d-flex justify-content-center">
                <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            }
            <div class="row row-cols-1 row-cols-md-1 g-4">
                {
                    orders.map(order=><Order
                    key={order._id}
                    order={order}
                    ></Order>)
                }
            </div>
        </div>
    );
};

export default Orders;