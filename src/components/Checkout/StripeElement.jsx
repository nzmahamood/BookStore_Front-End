import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { BASE_URL_NET } from "../../utils/domains";
import { useSelector } from "react-redux";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Muhm4GbD1BHl6nLJwcadq4ULkqTExTZgPtKkZYkfHImYSDejUz8cwAwYq9LkTneLAvDDlKfsx5WeiDmDN2ELDeZ00gCqpvL34"
);

const StripeElement = ({ formRef, orderData,handlePaymentSuccess }) => {
  const { access_token } = useSelector((state) => state.token);
  const [options, setOptions] = useState({
    theme: "stripe",
    // amount: 1099,
    // currency: "gbp",
    clientSecret: "",
  });

  useEffect(() => {
    //retrive stripe client secret
    console.log({ access_token });
    axios
      .post(
        `${BASE_URL_NET}/payments/api/create_intent/`,
        { amount: orderData ? orderData : 1099 },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setOptions({
          ...options,
          clientSecret: response.data?.client_secret || "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {options.clientSecret && (
        <Elements
          stripe={stripePromise}
          options={options}
          className="w-full mt-3"
        >
          <CheckoutForm formRef={formRef} handlePaymentSuccess={handlePaymentSuccess} />
        </Elements>
      )}
    </>
  );
};

export default StripeElement;
