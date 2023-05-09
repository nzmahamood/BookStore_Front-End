import {
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Step,
    StepLabel,
    Stepper,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import ShippingInfo from "./ShippingInfo";
  import BillingInfo from "./BillingInfo";
  import { initialValues, validation } from "./validation";
  import OrderAndPayment from "./OrderAndPayment";
  import { useSelector } from "react-redux";
  import OrderConfirmation from "./OrderConfirmation";
  import OrderStatus from "./OrderStatus";
  import { useRef } from "react";
  import { BASE_URL_NET } from "../../utils/domains";
  import axios from "axios";
  
  const Checkout = () => {
    const { books } = useSelector((state) => state.basket);
    const { access_token } = useSelector((state) => state.token);
  
    const [sameasShipping, setSameAsShipping] = useState(true);
    const [activeStep, setActiveStep] = useState(0);
    const [orderId, setOrderId] = useState(null);
    const [shippingData, setShippingData] = useState(initialValues);
    const [billingData, setBillingData] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [billingErrors, SetBillingErrors] = useState({});
    const total = useSelector((state) => state.total.total);
    const formRef = useRef(null);
    const handleShippingChange = (event) => {
      const { name, value } = event.target;
      setShippingData({ ...shippingData, [name]: value });
      if (sameasShipping) {
        handleBillingChange(event);
      }
    };
  
    console.log(books);

    

    useEffect(()=>{
      const fetShippingData = () =>{
        axios.post(`${BASE_URL_NET}/order/api/retrieve-info/`, {"type": "shipping"}, {
          headers:{
              "Content-Type": "application/json",
               "Authorization": `Bearer ${access_token}`
            }
      })
      .then((response) => {
          setShippingData(response.data)
          
      })
      .catch((error) =>{
          console.log('error', error)
      })
      }
      fetShippingData()
    },[access_token])
  
    const handleBillingChange = (event) => {
      const { name, value } = event.target;
      setBillingData({ ...billingData, [name]: value });
    };
  
    const handleBillingComponent = (e) => {
      const { checked } = e.target;
      if (checked) {
        setBillingData(shippingData);
        SetBillingErrors({});
      }
      setSameAsShipping(e.target.checked);
    };
  
    const getSteps = () => {
      return ["Address", "Order", "Payment", "Status"];
    };
  
    const steps = getSteps();
  
    const ShippingTab = () => {
      return (
        <>
          <ShippingInfo
            handleChange={handleShippingChange}
            shipping={shippingData}
            error={errors}
          />
          <Grid item xs={12} md={10}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={sameasShipping}
                  onChange={handleBillingComponent}
                  name="sameAsShipping"
                />
              }
              label="This info is same for Billing Address"
            />
          </Grid>
          {!sameasShipping && (
            <BillingInfo
              handleChange={handleBillingChange}
              billing={billingData}
              error={billingErrors}
            />
          )}
        </>
      );
    };
  
    const getStepContent = (stepIndex) => {
      switch (stepIndex) {
        case 0:
          return <ShippingTab />;
        case 1:
          return <OrderConfirmation total={total} />;
        case 2:
          return (
            <OrderAndPayment
              total={total}
              formRef={formRef}
              handlePaymentSuccess={handlePaymentSuccess}
            />
          );
        case 3:
          return <OrderStatus />;
        default:
          return "Unknown Step";
      }
    };
  
    const handleNext = (e) => {
      e.preventDefault();
      switch (activeStep) {
        case 0:
          handleSubmitAddressTab();
          // setActiveStep((prevStep) => prevStep + 1);
  
          // billing and shipping addresses
          break;
        case 1:
          // order summary tab
          handleConfirmOrder();
          // setActiveStep((prevStep) => prevStep + 1);
          break;
        case 2:
          // payment tab
          handleSubmitPaymentTab();
          break;
        case 3:
          // status
          break;
  
        default:
          break;
      }
    };
  
    const handleSubmitAddressTab = async () => {
      let newShippingErrors = {};
      let newBillingErrors = {};
  
      try {
        await validation.validate(shippingData, { abortEarly: false });
      } catch (errors) {
        errors.inner.forEach((error) => {
          newShippingErrors[error.path] = error.message;
        });
      }
      if (!sameasShipping) {
        try {
          await validation.validate(billingData, { abortEarly: false });
        } catch (billErrors) {
          billErrors.inner.forEach((billError) => {
            newBillingErrors[billError.path] = billError.message;
          });
        }
      }
      setErrors(newShippingErrors);
      SetBillingErrors(newBillingErrors);
      if (
        Object.values(newShippingErrors).every((val) => val === "") &&
        Object.values(newBillingErrors).every((val) => val === "")
      ) {
        setActiveStep((prevStep) => prevStep + 1);
      }
    };
  
    const handleConfirmOrder = () => {
      let order_items = [];
      books.forEach((elem) => {
        order_items.push({
          book: elem?.book?.id,
          quantity: elem.quantity,
          unit_price: elem.unit_price,
          discount: 0,
          shipping_cost: 0,
          total_price: parseFloat(elem.quantity) * parseFloat(elem.unit_price),
        });

        console.log('order_itemss', order_items)
      });
      axios
        .post(
          `${BASE_URL_NET}/order/api/create-order/`,
          {
            shipping_info: shippingData,
            billing_info: billingData,
            order_items,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${access_token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          setOrderId(response.data?.id);
          setActiveStep((prevStep) => prevStep + 1);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const handleSubmitPaymentTab = () => {
      if (formRef.current) {
        formRef.current.click();
      }
    };
  
    const handlePrev = () => {
      setActiveStep((prevStep) => prevStep - 1);
    };
  
    const handlePaymentSuccess = (payment_method) => {
      console.log('calling payment success');
      axios
        .post(
          `${BASE_URL_NET}/order/api/order-complete/`,
          {
            id: orderId,
            payment_token: payment_method,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${access_token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          setActiveStep((prevStep) => prevStep + 1);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return (
      <Container maxWidth="md" className="relative top-5">
        <div className="w-full mb-3 flex flex-col items-center">
          <h4 className="font-inter font-semibold tracking-wider text-slate-900">
            Checkout
          </h4>
          <Stepper
            className="w-full mt-3"
            activeStep={activeStep}
            alternativeLabel
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
  
        <div className="flex flex-col  gap-1">
          <Grid container className="justify-center" spacing={2}>
            {activeStep === steps.length
              ? "Steps Completed"
              : getStepContent(activeStep)}
            <div className="w-full flex justify-between p-3 md:justify-start md:gap-2 flex-row-reverse">
              <Button
                onClick={handleNext}
                variant="contained"
                className="bg-teal-700"
              >
                {activeStep === 2 ? "Place Order" : "Next"}
              </Button>
              {activeStep !== 0 && (
                <Button onClick={handlePrev} variant="outlined">
                  Cancel
                </Button>
              )}
            </div>
          </Grid>
        </div>
      </Container>
    );
  };
  
  export default Checkout;
  