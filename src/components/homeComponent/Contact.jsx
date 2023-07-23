import { Box, Button, ButtonGroup, Text } from '@chakra-ui/react';
import React from 'react';

function Contact() {
  return (
    <div
      style={{
        backgroundColor: '#00110E',
        padding: '40px',
      }}
    >
      <Box
        display='flex'
        bg='#00110E'
        px='25'
        py='20px'
        color='#FFF'
        flexDirection='row'
        justifyContent='space-between'
        width='100%'
        maxWidth='1180px'
        margin='0 auto'
        height='35vh'
      >
        <Box mt='40px' mb='25px'>
          <Text fontSize='37px' fontWeight='700'>
            Be a part of our Journey
          </Text>
          <Text fontSize='20px' fontWeight='500'>
            You’re close to making your dream a reality. Take the bold step.
          </Text>
        </Box>
        <Box mt='40px' mb='25px'>
          <ButtonGroup>
            <Button
              //   colorScheme='pink'
              p='10px'
              color='#FFF'
              borderRadius='6px'
              // variant='solid'
              // colorScheme='brand'
              bgColor='#F3f4'
              bg='#899926'
              height='48px'
              variant='ghost'
              width='200px'
            >
              Request a Quote
            </Button>
            <Button
              p='10px'
              // isLoading
              borderRadius='6px'
              // colorScheme='teal'
              border='2px'
              color='#B7CC33'
              height='48px'
              width='200px'
              // bgColor='whatsapp.300'
              variant='outline'
            >
              Contact us
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </div>
  );
}

export default Contact;
