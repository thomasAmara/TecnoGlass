/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
// import Collection from '../../Images/collections.svg';

function Aboutus() {
  return (
    <div style={{ color: '#FFF', backgroundColor: '#00221B' }}>
      <Box
        margin='0 auto'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        p='15px 20px'
        maxW='1280px'
        // bg='#00221B'
        width='100%'
      >
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          maxWidth='180px'
          p='10px'
          w='100%'
          // height='24px'
          borderRadius='36px'
          bg='#BFD0CD'
          margin='0 auto'
        >
          <Text
            fontSize='12px'
            fontWeight='500'
            textTransform='uppercase'
            color='#004436'
          >
            About us
          </Text>
        </Box>

        <Box margin='0 auto' py='25px'>
          <Text fontSize='36px' fontWeight='700'>
            38 years of service excellence
          </Text>
        </Box>

        <Box
          px='30px'
          width='100%'
          margin='0 auto'
          textAlign='center'
          maxWidth='860px'
        >
          <Text fontWeight='400' fontSize='20px'>
            Established in 1994, TGI was birthed from a growth in the
            construction industry and a demand for a company that would
            manufacture and process safety glass. Technoglass is equipped with
            state of the art machinery and highly trained personnel, providing
            an all encompassing service from initial design sketches to
            installation.
          </Text>
        </Box>
        <Box margin='0 auto' py='25px'>
          <Button
            p='10px'
            borderRadius='6px'
            boxShadow='0px 1px 2px 0px rgba(105, 81, 255, 0.05)'
            bg='#899926'
            color='#FFF'
          >
            Read More
          </Button>
        </Box>
      </Box>
    </div>
  );
}

// const Array = [
//   {
//     title: 'lo',
//   },
// ];

export default Aboutus;
