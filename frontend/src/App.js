import React from 'react';
import NavBar from './components/navbar/NavBar';
import Header from './components/header/Header';
import './App.css';
import { Box, Grid2 } from '@mui/material';

const App = () => {
  return (
    <>
      <Header />
      <Grid2 container>
        <Grid2 item xs={12} sm={3} md={2}>
          <NavBar />
        </Grid2>
        <Grid2 item xs={12} sm={9} md={10}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
            {/* Main content goes here */}
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
}

export default App;