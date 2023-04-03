import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthLogo, MsLogo } from '../../utils/svg';
import { useState } from 'react';
import { validateName, validateEmail, validatePassword, validateConfirmPassword, validateAcceptTerms } from './form_validations';
import AxiosRequest from '../../utils/axios';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        BookStore
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

function ValidateForm(name, email, password, confirmpassword){
    let formerrors = {}

    formerrors.name = validateName(name)
    formerrors.email = validateEmail(email)
    formerrors.password = validatePassword(password)
    formerrors.confirmpass = validateConfirmPassword(password, confirmpassword)

    return formerrors
}

export default function SignUp() {
    //hook for validation
    const [validateFormError, setValidateFormError] = useState({})
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name')
    const email = data.get('email')
    const password = data.get('password')
    const confirmpassword = data.get('confirmpassword')
    // console.log({
    //     name: data.get('name'),  
    //     email: data.get('email'),
    //     password: data.get('password'),
    //     confirmpass: data.get('confirmpassword')
    //   });
    const formValues = {
        name: data.get('name'),
        email: data.get('email'),
        password: data.get('password'),

    }
    
    //validating form fields
    const validationErrors = ValidateForm(name, email, password, confirmpassword)
    setValidateFormError(validationErrors);
    if(Object.values(validationErrors).every(val => val === '')){
        try{
            console.log('heree')
            const response = await AxiosRequest('http://localhost:8000/users/signup', formValues, 'POST')
            console.log(response)
        }catch(error){
            console.log(error)
        }
    }
    

    //API 
    
    
    
  };

  return (
    <ThemeProvider theme={theme}>
        <div className='w-full flex justify-center items-center'>
        <AuthLogo />
        </div>
        
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: 0,
            borderColor: 'grey.500',
            padding: 2,
            borderRadius: "12px",
            boxShadow: 1
          }}
          className='flex justify-center'
        >
          
            
          
          <Typography component="h1" variant="h5" className='font-inter text-slate-700' sx={{fontFamily: ''}}>
            Sign up
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  fullWidth
                  id="name"
                  label="Name"
                  size="small"
                  error={validateFormError.name}
                  helperText={validateFormError.name}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  size="small"
                  error={validateFormError.email}
                  helperText={validateFormError.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  size="small"
                  error={validateFormError.password}
                  helperText={validateFormError.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="confirmpassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmpassword"
                  autoComplete="new-password"
                  size="small"
                  error={validateFormError.confirmpass}
                  helperText={validateFormError.confirmpass}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="agreeTerms" color="primary" />}
                  label="I agree to Terms & Conditions."
                />
              </Grid>
            </Grid>
            <Button
              className='bg-gradient-to-r from-teal-500 to-teal-700'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              <span className='font-inter text-slate-50'>Sign Up</span>
            </Button>
            <div className='flex flex-row mt-5 justify-between'>
                <div className='bg-slate-400 h-[1px] w-[40%] mt-3'></div>
                <span className=''>OR</span>
                <div className='bg-slate-400 h-[1px] w-[40%] mt-3'></div>
            </div>
            <Button
              className='bg-gradient-to-r from-gray-100 to-gray-200'
              type="button"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
              startIcon= {<MsLogo />}
              
            >
              <span className='font-inter text-slate-900'>Sign Up With Microsoft</span>
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/user/sign-in" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}