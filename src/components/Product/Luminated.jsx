import { Box, Text, Image, Stack } from '@chakra-ui/react';
import React from 'react';
import GlassImage from '../../Images/officeGlass.png';
import GlassImage2 from '../../Images/officeGlassmini.png';
import GlassImage3 from '../../Images/officeGlassmid.png';

function LuminatedGlass() {
  return (
    <div
      style={{
        backgroundColor: '#00110E',
      }}
    >
      <Box
        display='flex'
        maxWidth='1280px'
        margin=' 0 auto'
        p='25px'
        justifyContent='space-between'
        flexDirection='row'
      >
        <Box>
          <Image src={GlassImage} />
        </Box>
        <Box display='flex' flexDirection='column'>
          <Stack spacing='30px' direction='column'>
            <Box>
              <Image src={GlassImage2} />
            </Box>
            <Box>
              <Image src={GlassImage3} />
            </Box>
          </Stack>
        </Box>
      </Box>
      <Box color='#FFF' maxWidth='1280px' margin='0 auto' bg='#00110E'>
        <Box py='20px'>
          <Text
            fontSize='24px'
            textAlign='center'
            color='#A5B82E'
            fontWeight='500'
          >
            Laminated Glass
          </Text>
        </Box>
        <Box py='25px'>
          <Text fontSize='20px' fontWeight='400'>
            Laminated glass is strong and has a robust structure that is hard to
            break. It is suitable for use in many ways. If you’re thinking of
            adding glass to your home or business, you should consider
            installing laminated glass in its place. <br />
          </Text>
          <Text mt='15px' fontSize='20px' fontWeight='400'>
            Low-emissivity glass can help to reduce heat gain from the sun and
            reduces noise pollution. As the glass doesn’t shatter when broken,
            there is a reduced risk of someone being cut or injured by shards of
            glass. In the arrival of natural disasters or volatile weather,
            laminated glass will remain in its frame, reducing the risk of
            accidents and making a life-threatening situation slightly safer. We
            have laminated glazing in many colors, tints, or tones, which can be
            manufactured straight or curved for greater versatility in
            appearance.
          </Text>
        </Box>
      </Box>
    </div>
  );
}

export default LuminatedGlass;
