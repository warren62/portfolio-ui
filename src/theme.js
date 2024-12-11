import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#303030', 
      paper: '#424242'
    },
    primary: {
      main: '#90caf9',
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa'
    },
  },
  typography: {
    fontFamily: 'Roboto, "Helvetica Neue", sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: '400',
    },
  },
});

export default theme;
