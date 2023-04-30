import * as Yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const initialValues = {
    first_name: '',
    last_name: '',
    phone: '',
    country: '',
    street_address: '',
    city: '',
    post_code: '',
    notes: '',
    
}
const validation = Yup.object({
    first_name: Yup.string().required('First Name is required'),
    last_name: Yup.string().required('Last Name is required'),
    phone: Yup.string().required('Phone Number is required'),
    country: Yup.string().required('Country is required'),
    street_address: Yup.string().required('Street Address is required'),
    city: Yup.string().required('City is required'),
    post_code: Yup.string().required('Post Codee is required'),
    notes: Yup.string().notRequired(),
})

export {validation, initialValues}