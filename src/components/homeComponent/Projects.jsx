import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import '../../Styles/productInfo.scss';
import Office from '../../Images/officeBuilding.png';

function Projects() {
  return (
    <div>
      <div className='BgWave'></div>
      <Box
        color='#FFF'
        p='20px'
        display='flex'
        justifyContent='center'
        margin='0 auto'
        bg='#00221B'
      >
        <Box>
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
              Testimonials
            </Text>
          </Box>
          <Box px='20px' py='30px'>
            <Text
              fontSize='36px'
              textAlign='center'
              letterSpacing='0.72px'
              fontWeight='700'
            >
              Some of the projects we’ve executed
            </Text>
          </Box>

          <Box mt='10px' mb='20px' py='10px'>
            <Image src={Office} alt='' />
          </Box>
        </Box>
      </Box>
      <div className='BgWaveDown'></div>
    </div>
  );
}

export default Projects;
