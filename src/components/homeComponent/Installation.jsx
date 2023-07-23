'use client';
import React from 'react';
import { Box, Button, Image, Text } from '@chakra-ui/react';
// import Logo from '../../../public/Images/Tecnologo.png';
import Install from '../../Images/Installation.png';

function Installation() {
  return (
    <div
      style={{
        backgroundColor: '#00110E',
      }}
    >
      <Box bg='#00110E' p='35px 20px'>
        <Box
          display='flex'
          width='100%'
          margin='0 auto'
          maxWidth='1280px'
          py='30px'
          flexDirection={['column-reverse', 'column-reverse', 'row']}
          alignItems='center'
          justifyContent='space-between'
        >
          <Box maxWidth='580px' width='100%'>
            <Box>
              <Text
                fontSize='48px'
                letterSpacing='-0.96px'
                lineHeight='60px'
                color='#FFF'
                fontWeight='700'
              >
                From Production to Installation
              </Text>
            </Box>
            <Box py='20px'>
              <Text fontSize='20px' fontWeight='500' color='#8896AB'>
                Over the years, we have recorded the production of quality glass
                that has withstood the test of time. Our experienced technicians
                with vast knowledge of glass production enact quality control
                for top-notch product delivery at all times.
              </Text>
            </Box>
            <Box mt='20px'>
              <Button
                p='10px'
                borderRadius='6px'
                border='2px'
                color='#B7CC33'
                height='48px'
                width='200px'
                variant='outline'
              >
                Request a Quote
              </Button>
            </Box>
          </Box>
          <Box>
            <Image
              src={Install}
              width='550px'
              height='500px'
              alt='installation done'
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Installation;
