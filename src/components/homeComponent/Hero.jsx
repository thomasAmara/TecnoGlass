import { Box } from '@chakra-ui/react';
import React from 'react';
import ReactPlayer from 'react-player';

function Hero() {
  return (
    <div>
      <Box height='90vh' bg='#000' p='5px'>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=GVvF3I0I_uA'
          width='100%'
          height='100%'
        />
      </Box>
    </div>
  );
}

export default Hero;
