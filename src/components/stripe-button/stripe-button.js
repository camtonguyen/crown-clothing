import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const PriceForStripe = price * 100;
    const publishableKey = 'pk_test_9e1iNRIfeRxpuwHvPPgicoky00rcLVkvco';

    const onToken = token => {
        console.log(token);
        alert('Payment is successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Crown Clothing Shop'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amout={PriceForStripe}
            panelLabel={`Pay Now $${price}`}
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;