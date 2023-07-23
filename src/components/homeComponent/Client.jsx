import { Box, SimpleGrid, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Wisehelp from '../../Images/wisehelp.svg';
import Curb from '../../Images/resecurb.svg';
import Symtric from '../../Images/symtric.svg';
import Jiggle from '../../Images/jiggle.svg';

function Client() {
  return (
    <div style={{ backgroundColor: '#00110E', padding: '30px' }}>
      <Box
        margin='0 auto'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        color='#FFF'
        maxWidth='1180px'
        width='100%'
        px='20px'
        py='30px'
        bg='#00110E'
      >
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          p='10px'
          width='100%'
          maxWidth='180px'
          borderRadius='36px'
          bg='#BFD0CD'
          margin='0 auto'
        >
          <Text
            fontSize='12px'
            textTransform='uppercase'
            fontWeight='500'
            color='#004436'
          >
            Our Client
          </Text>
        </Box>
        <Box
          mt='35px'
          border='5px'
          //   borderColor='#FF6'
          margin='0 auto'
          py='40px'
        >
          <Text mt='20px' fontWeight='500' fontSize='20px'>
            Trusted by various companies across industries
          </Text>
        </Box>
        <Box mt='30' py='30px'>
          <SimpleGrid spacing='20px' minChildWidth='260px' direction='row'>
            {Data.map((item, i) => (
              <Box
                height='150px'
                display='flex'
                justifyContent='center'
                alignItems='center'
                borderRadius='6px'
                bg='#BFD0CD'
                key={i}
              >
                <Image src={item.image} alt='' />
              </Box>
            ))}
          </SimpleGrid>
          <Box>{/* <Image src={Wisehelp} alt='' /> */}</Box>
        </Box>
      </Box>
    </div>
  );
}

export default Client;

const Data = [
  {
    image: Wisehelp,
  },
  {
    image: Curb,
  },
  {
    image: Symtric,
  },
  {
    image: Jiggle,
  },
];
