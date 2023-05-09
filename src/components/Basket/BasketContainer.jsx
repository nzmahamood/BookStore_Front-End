import { Box, Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import BasketItem from "./BasketItem";
import { useDispatch, useSelector } from "react-redux";
import OrderSummary from "./OrderSummary";
import axios from "axios";
import { BASE_URL_NET } from "../../utils/domains";
import { fetchBasketItems } from "../../contexts/store/BasketSlice";
import EmptyBasket from "./EmptyBasket";
import { useNavigate } from "react-router-dom";

const BasketContainer = () => {
  const dispatch = useDispatch();
  const { access_token } = useSelector((state) => state.token);
  const items = useSelector((state) => state.basket);
  const {basket_id} = useSelector((state) => state.basket)
  const navigate = useNavigate()
  console.log('basket_id', basket_id)
  // const [items, setItems] = useState([])


  useEffect(()=>{
    if(!access_token){
      navigate('/sign-in', {state: {from: 'basket'}})
    }
  },[])

  useEffect(() => {
    axios
      .get(`${BASE_URL_NET}/basket/api/basket/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        // setItems(response.data)
        console.log("items", items);
      })
      .catch((error) => {
        console.log(error);
      });

    if (access_token) {
      dispatch(fetchBasketItems({ access_token }));
      console.log(access_token);
    }
  }, []);

  const subTotal = () => {
    let total = 0;

    !items.loading &&
      items.books?.forEach((item) => {
        const itemPrice = parseFloat(item.book?.average_rating);
        const itemQuantity = parseInt(item.quantity);
        const itemTotalPrice = itemPrice * itemQuantity;
        total += itemTotalPrice;
      });

    return total.toFixed(2);
  };
  let discount = 0;
  const grandTotal = (subTotal() - discount).toFixed(2);
  return (
    <Container maxWidth="lg" className="relative top-5 flex flex-col">
      {/* title */}
      <Box className="w-full h-[50px] md:h-[52px] flex justify-center">
        <h2 className="text-slate-900 font-inter tracking-wider text-[29px] md:text-[32px] xl:text-[39px] font-medium">
          Shopping Basket
        </h2>
      </Box>
      <div className="w-full p-2 flex justify-center md:justify-end">
        <Button
          variant="contained"
          size="medium"
          className="hidden md:block capitalize text-sm bg-teal-700 md:w-[300px]"
        >
          Checkout <span>| (Total: ${grandTotal})</span>
        </Button>
      </div>

      <ul className="w-full md:flex pb-4 mb-3 border-b border-[silver] font-inter font-medium tracking-wide text-slate-900 hidden">
        <li className="basis-[64%] max-w-[64%]">Item</li>
        <li className="basis-[16%] max-w-[16%] text-center">Qty</li>
        <li className="basis-[16%] max-w-[16%] text-center">Price</li>
        <li className="basis-[16%] max-w-[16%] text-center">Total Price</li>
      </ul>
      {items.loading && <p>loading....</p>}
      {!items.loading && items.books?.length ? (
        <>
          {items.books.map((item) => (
            <BasketItem key={item.id} item={item.book} qty={item.quantity} />
          ))}
          <OrderSummary
            subTotal={subTotal()}
            discount={discount}
            grandTotal={grandTotal}
          />
        </>
      ) : (
        !items.loading && <EmptyBasket />
      )}
    </Container>
  );
};

export default BasketContainer;
