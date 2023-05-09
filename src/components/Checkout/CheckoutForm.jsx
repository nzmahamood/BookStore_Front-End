import React, { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = ({ formRef, handlePaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();
    console.log("payment submit");

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error, payment_method } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "",
      },
      redirect: "if_required",
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
    } else {
      console.log("payment success", payment_method);
      handlePaymentSuccess(payment_method);
      // customer will be redirected to `return_url`. For some payment
      // methods like iDEAL, customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button style={{ display: "none" }} ref={formRef} disabled={!stripe}>
        Submit
      </button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default CheckoutForm;
