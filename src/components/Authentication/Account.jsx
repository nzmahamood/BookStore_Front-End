import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import AxiosRequest from '../../utils/axios'
import { decodeToken, isTokenExpired, RefreshAccessToken } from '../../utils/utils'

const Account = () => {
    const { access_token, refresh_token } = useSelector(state => state.token)
    const decode = decodeToken(access_token)
    const expired = isTokenExpired(decode)
    const [response, setResponse] = useState({})

    

    useEffect(()=>{
        if(expired){
            const fetchToken = async() =>{
                const res = await RefreshAccessToken(refresh_token)
                if(res){
                    console.log("Refreshed")
                    
                }
                
            }
            fetchToken()
            
        }
        const fetchAccountInfo = async () => {
            const config = {
                Authorization: `Bearer ${access_token}`
            }
            const res = await axios.get('http://localhost:8000/users/testauth', {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })
            console.log(res)
            setResponse({user: res.data.user})
        }
        fetchAccountInfo()
    },[refresh_token, expired, access_token])

    

  return (
    <div>
        {response.user} Account
    </div>
  )
}

export default Account