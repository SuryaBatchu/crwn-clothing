import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51JIW9aSHdnGW4ZsgvjPSX8nqeI3sze0ulBsRCa0xKZECzwPslAewL0Ek6H6Cu4GQn3kzpwZ9MWO4HgHmmwhxbe9X00aaESBOC2';

   const onToken = token => {
       alert('Payment Successful');
   }


   return(
       <StripeCheckout
         label='Pay Now'
         name = 'CRWN Clothing India Ltd.'
         billingAddress
         shippingAddress
         image='https://svgshaqre.com/i/CUz.svg'
         description={`your total is $${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishableKey}
         currency ="RUPEE"
       />
   )

};
export default StripeCheckoutButton;