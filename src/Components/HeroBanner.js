import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';


const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px' },
      ml: { sm: '50px' }
    }} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Hub
      </Typography>
      <Typography fontWeight={700}
      sx={{ fontSize: { lg: '38px', xs: '34px'}
      }} mb="23px" mt="30px">
        Work hard <br /> and play hard
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Try out the best exercises 
      </Typography>
      <Button variant="contained" color="error" href="#exercises"
        sx={{ backgroundColor: '#FF2625', padding: '10px' }}>
        Try exercises
      </Button>
      <Typography fontWeight={600} color="#FF2625"
        sx={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'none'}
        }}
        fontSize="200px"
      >
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />

    </Box>

  )
}

export default HeroBanner