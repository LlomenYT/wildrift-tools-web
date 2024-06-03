import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './routes/index';
import { AuthProvider } from './context/authcontext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'



function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

      <Router>

        <AuthProvider>

          <MainRoutes />
        </AuthProvider>
      </Router>
    </LocalizationProvider >
  );
};

export default App;
