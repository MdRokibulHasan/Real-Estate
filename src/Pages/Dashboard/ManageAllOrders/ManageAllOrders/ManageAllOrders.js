import React from 'react';
import useOrders from '../../../../hooks/useOrders';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';

const ManageAllOrders = () => {
    const { spinner, orders } = useOrders()
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-1 g-4">
                {
                    orders.map(order=><ManageAllOrder
                    key={order._id}
                    order={order}
                    ></ManageAllOrder>)
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;