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

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
            marginTop: 6,
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
            Sign In
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  size="small"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
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
              <span className='font-inter text-slate-50'>Sign In</span>
            </Button>
            <div className='flex flex-row mt-5 justify-between'>
                <div className='bg-slate-400 h-[1px] w-[40%] mt-3'></div>
                <span className=''>OR</span>
                <div className='bg-slate-400 h-[1px] w-[40%] mt-3'></div>
            </div>
            <Button
              className='bg-gradient-to-r from-gray-100 to-gray-200'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              startIcon= {<MsLogo />}
              
            >
              <span className='font-inter text-slate-900'>Sign In With Microsoft</span>
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/user/sign-up" variant="body2">
                  Don't have an account? Create Account
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