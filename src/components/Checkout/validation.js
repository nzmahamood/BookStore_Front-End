import * as Yup from 'yup'

const initialValues = {
    firstname: '',
    lastname: '',
    phone: '',
    country: '',
    streetaddress: '',
    city: '',
    postcode: '',
    notes: '',
    sameAsShipping: false,
    bfirstname: '',
    blastname: '',
    bphone: '',
    bcountry: '',
    bstreetaddress: '',
    bcity: '',
    bpostcode: '',
    bnotes: '',
    
}
const validation = Yup.object().shape({
    firstname: Yup.string().required('First Name is required'),
    lastname: Yup.string().required('Last Name is required'),
    phone: Yup.string().required('Phone Number is required'),
    country: Yup.string().required('Country is required'),
    streetaddress: Yup.string().required('Street Address is required'),
    city: Yup.string().required('City is required'),
    postcode: Yup.string().required('Post Code is required'),
    notes: Yup.string().notRequired(),
    sameAsShipping: Yup.boolean(),
    bfirstname: Yup.string().required('First Name is required'),
    blastname: Yup.string().required('Last Name is required'),
    bphone: Yup.string().required('Phone Number is required'),
    bcountry: Yup.string().required('Country is required'),
    bstreetaddress: Yup.string().required('Street Address is required'),
    bcity: Yup.string().required('City is required'),
    bpostcode: Yup.string().required('Post Code is required'),
    bnotes: Yup.string().notRequired(),
})

export {validation, initialValues}