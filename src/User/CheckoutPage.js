import React from 'react';
import Boiler from './../Components/layout/Boiler';
import { useParams } from 'react-router';
import CheckOut from './../Components/chekout/checkOut';

const CheckoutPage = () => {
    const {id} = useParams()
    return (
       <>
       <Boiler>

        <CheckOut productId={id}></CheckOut>
       </Boiler>
       </>
    );
};

export default CheckoutPage;