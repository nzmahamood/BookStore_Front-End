import axios from 'axios'

async function AxiosRequest(url = '', data = {}, method = '') {
    if(method === 'POST'){
        try {
            const response = await axios.post(url, data)
            return response.data
        } catch (error) {
            if(error.response){
                throw error.response.data
            }else if(error.request){
                throw error.request
            }else{
                throw error
            }
        } 
    }
}

export default AxiosRequest