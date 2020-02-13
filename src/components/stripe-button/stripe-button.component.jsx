import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {StripeKey} from '../../config/config';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = StripeKey;

    const onToken = token => {
        console.log(token)
        alert('Payment Successfull')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Zeppelin ECommerce'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;