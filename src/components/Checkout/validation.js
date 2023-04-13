import * as Yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const initialValues = {
    firstname: '',
    lastname: '',
    phone: '',
    country: '',
    streetaddress: '',
    city: '',
    postcode: '',
    notes: '',
    
}
const validation = Yup.object({
    firstname: Yup.string().required('First Name is required'),
    lastname: Yup.string().required('Last Name is required'),
    phone: Yup.string().required('Phone Number is required'),
    country: Yup.string().required('Country is required'),
    streetaddress: Yup.string().required('Street Address is required'),
    city: Yup.string().required('City is required'),
    postcode: Yup.string().required('Post Codee is required'),
    notes: Yup.string().notRequired(),
})

export {validation, initialValues}