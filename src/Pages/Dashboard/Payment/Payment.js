import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import NavBar from '../../Shared/Header/NavBar/NavBar';



const stripePromise = loadStripe('pk_test_51KD3hsCPYljujfCSYMnUVa1XXuolY7iSaCGz2rVipwIDOJ8NKGknJPkHM1OWsYil5wzCqQKOSQirObi7dGIl3ESE00BIFP9Wzq')

const Payment = () => {
    const { serviceID } = useParams();
    const [services, setservices] = useState({});
    useEffect(() => {
        fetch(`https://agile-atoll-48938.herokuapp.com/services/${serviceID}`)
            .then(res => res.json())
            .then(data => setservices(data));
    }, [serviceID]);
    return (
        <Box>
            <NavBar></NavBar>
            <Grid container spacing={2} sx={{ display: 'felx', justifyContent: 'center' }}>
                <Grid item xs={12} md={4}>
                    <Box sx={{}}>
                        <div>
                            <h2>Please Pay for: {services.p_name}</h2>
                            <h4>Pay: ${services.price}</h4>
                            {services?.price && <Elements stripe={stripePromise}>
                                <CheckoutForm
                                    services={services}
                                />
                            </Elements>}
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </Box>

    );
};

export default Payment;
