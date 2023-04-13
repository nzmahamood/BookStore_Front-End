import axios from "axios"
import { BASE_URL_NET } from "../../utils/domains"
import { useSelector } from "react-redux"
import React from "react";

const UseAccessToken = () => {
    const accessToken = useSelector((state) => state.token.access_token);
    return accessToken;
  };

const add_to_cart = (data) => {
    const access_token = UseAccessToken()
    axios.post(`${BASE_URL_NET}/basket/api/add_to_basket/`, data, {
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${access_token}`
        },
    })
    .then((response) => {
        return response
    })
    .catch((error) => {
        return error
    })
}

export {add_to_cart}