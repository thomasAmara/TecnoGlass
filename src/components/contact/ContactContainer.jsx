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
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
// import { GOOGLE_MAPS_APIKEY } from '@env';

function ContactContainer() {
  return (
    <div style={{ backgroundColor: '#00110E' }}>
      <Box
        p='25px'
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
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
                    <CustomInput
                      //   backgroundColor='#FFF'
                      //   inputColor='#FFF'
                      //   textcolor='#FFF'
                      name='Phone'
                    />
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
                <Textarea height='240px'></Textarea>
              </Box>
              <Box mt='20px'>
                <Button
                  color='#FFF'
                  maxWidth='740px'
                  width='100%'
                  height='48px'
                  bg='#899926'
                  colorScheme='whatsapp'
                >
                  Book an appointment
                </Button>
              </Box>
            </Box>
          </Formik>
        </Box>
        <Box>
          <Image src={Ride} alt='' />
          {/* <GoogleMap
            mapContainerClassName='map-container'
            apikey={'AIzaSyDECSoRbyPaXyO_2Al0JXZ8m1JPu9mLzvQ'}
            //   center={center}
            zoom={10}
          /> */}
          <Box mt='20px'>
            <Button
              color='#B7cc33'
              colorScheme='whatsapp'
              maxWidth='390px'
              width='100%'
              p='15px'
              height='48px'
              variant='outline'
            >
              Open in Google Maps
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ContactContainer;
