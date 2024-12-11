import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ApodCardDashboard from './components/ApodCardDashboard/ApodCardDashboard'; // Ensure this component is properly defined and imported

export default function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navigation />
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: 'background.default' }}>
        <Typography variant="h4" gutterBottom>Welcome to my portfolio!</Typography>
        <Typography variant="h5" gutterBottom>Nasa APOD Viewer</Typography>
        <ApodCardDashboard />
      </Box>
    </Box>
  );
}
