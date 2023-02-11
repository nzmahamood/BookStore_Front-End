import { useDispatch } from "react-redux"
import { storeTokenReducer } from "../contexts/store/tokenSlice"
import AxiosRequest from "./axios"
import jwtDecode, * as jwt_decode from "jwt-decode"
const isTokenExpired = (decodedToken) => {
    return true
}

const decodeToken = (token) => {
    try {
        const decode = jwtDecode(token)
        return decode
    } catch (error) {
        console.log(error)
    }
}


const RefreshAccessToken = async (refreshToken) =>{
    try {
        const dispatch = useDispatch()
        const tokenResponse = await AxiosRequest('http://localhost:8000/users/refresh', {"refresh": refreshToken}, 'POST')
        dispatch(storeTokenReducer({access: tokenResponse.access, refresh: tokenResponse.refresh}))
        console.log(tokenResponse)
        return true
    } catch (error) {
        console.log(error)
        return false
    }

}

export { RefreshAccessToken, isTokenExpired, decodeToken }