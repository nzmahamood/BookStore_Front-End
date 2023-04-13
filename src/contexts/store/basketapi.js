import axios from "axios"
import { BASE_URL_NET } from "../../utils/domains"


const add_to_cart = (data, access) => {
    axios.post(`${BASE_URL_NET}/basket/api/add_to_basket/`, data, {
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${access}`
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