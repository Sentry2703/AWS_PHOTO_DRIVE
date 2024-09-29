import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    primary: {
      main: "#6EEB83",
    },
    secondary: {
      main: "#3A3042",
    },
    error: {
      main: "#F72C25"
    },
    info: {
      main: "#B370B0"
    },
    success: {
      main: "#F8E5EE"
    },
    //Palette inspired from https://coolors.co/6eeb83-3a3042-f72c25-b370b0-f8e5ee
  },
  direction: 'ltr'
})
root.render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
