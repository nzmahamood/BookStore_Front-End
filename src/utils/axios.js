import axios from 'axios'

async function AxiosRequest(url = '', data = {}, method = '') {
    if(method === 'POST'){
        try {
            const response = await axios.post(url, data)
            return response.data
        } catch (error) {
            let errorMessage = ''
            if (error.response) {
              errorMessage = error.response.data.message || error.response.statusText
            } else if (error.request) {
              errorMessage = 'Network error: no response received'
            } else {
              errorMessage = error.message
            }
            throw errorMessage
        } 
    }
}

export default AxiosRequest