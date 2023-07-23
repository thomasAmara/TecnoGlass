import React from 'react';
import Logo from '../Images/Tecnologo.png';
import { Box, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Image } from '@chakra-ui/react';

function Navbar() {
  return (
    <div
      style={{
        backgroundColor: '#000705',
      }}
    >
      <Box
        maxWidth='1280px'
        width='100%'
        display='flex'
        flexDirection='row'
        alignItems='center'
        margin='0 auto'
        // bg='#000705'
        p='15px 25px'
        justifyContent='space-between'
      >
        <Box maxWidth='200px' border='2px'>
          <Link href='/'>
            <Image src={Logo} alt='' />
          </Link>
        </Box>
        <Box
          display='flex'
          justifyContent='space-evenly'
          color='#FFF'
          border='2px #908F34'
          width='100%'
          flexDirection='row'
        >
          <Link to='/products'>
            <Text fontWeight='500' fontSize='16px'>
              Product
            </Text>
          </Link>
          <Link to='/aboutus'>
            <Text fontWeight='500' fontSize='16px'>
              About
            </Text>
          </Link>
          <Link to='/contact'>
            <Text fontWeight='500' fontSize='16px'>
              Contact
            </Text>
          </Link>
        </Box>
        <Box>
          <Button
            color='#FFF'
            bg='#899926'
            p='8px'
            borderRadius='6px'
            colorScheme='whatsapp'
          >
            Request a Quote
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Navbar;
