import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_PCRUq8snQnDxr5F4ck53EEnd00FK99rXUH";
  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(res => alert("Payment Sucessfull"))
      .catch(error => {
        console.log("Payment error", JSON.parse(error));
        alert(
          "There was issue with your payment. Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="E-commerce"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $ ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
