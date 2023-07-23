'use client';
import React from 'react';
import {
  Box,
  Text,
  Wrap,
  SimpleGrid,
  Textarea,
  Button,
  Image,
} from '@chakra-ui/react';
import { Formik } from 'formik';
import CustomInput from './CustomeInput';
import Ride from '../../Images/Ride.svg';

function ContactContainer() {
  return (
    <div style={{ backgroundColor: '#00110E' }}>
      <Box
        p='25px'
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        border='2px'
        borderColor='red'
        margin='0 auto'
        maxWidth='1180px'
        // justifyContent='center'
      >
        <Box maxWidth='720px' width='100%'>
          <Text color='#899926'>Book an appointment</Text>
          <Formik
            initialValues={{
              Name: '',
              Email: '',
              Phone: '',
              Address: '',
            }}
          >
            <Box>
              <SimpleGrid
                mt='20px'
                color='#FFF'
                minChildWidth='120px'
                spacing={30}
              >
                <Box>
                  <Wrap>
                    <Text>Name</Text>
                    <CustomInput name='Name' />
                  </Wrap>
                </Box>
                <Box>
                  <Wrap>
                    <Text>Email</Text>
                    <CustomInput name='Email' />
                  </Wrap>
                </Box>
              </SimpleGrid>
              <SimpleGrid
                mt='20px'
                color='#FFF'
                minChildWidth='120px'
                spacing='30px'
              >
                <Box>
                  <Wrap>
                    <Text>Mobile Phone</Text>
                    <CustomInput name='Phone' />
                  </Wrap>
                </Box>
                <Box>
                  <Wrap>
                    <Text>Address</Text>
                    <CustomInput name='Address' />
                  </Wrap>
                </Box>
              </SimpleGrid>
              <Box mt='20px'>
                <Textarea></Textarea>
              </Box>
              <Box>
                <Button colorScheme='facebook'>Book an appointment</Button>
              </Box>
            </Box>
          </Formik>
        </Box>
        <Box>
          <Image src={Ride} alt='' />
        </Box>
      </Box>
    </div>
  );
}

export default ContactContainer;
