import React, { useState } from 'react';
import Logo from '../Images/Tecnologo.png';
import { Box, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Image } from '@chakra-ui/react';
import '../Styles/navbar.scss'; //'Navbar.scss'
// RxHamburgerMenu AiOutlineMenu
import { RxArrowDown } from 'react-icons/rx';
import { AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div
      style={{
        backgroundColor: '#000705',
      }}
    >
      <Box
        className='Navbar'
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
          <Link to='/'>
            <Image src={Logo} alt='' />
          </Link>
        </Box>

        <div className='menu-icon' onClick={handleClick}>
          <AiOutlineMenu color='#FFF' size={48} />
          {/* <i className={active ? 'fas fa-times' : 'fas fa-bars'}></i> */}
        </div>
        <Box
          className={active ? 'Navmenu active' : 'Navmenu'}
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
        <Box className='Navbutton'>
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
