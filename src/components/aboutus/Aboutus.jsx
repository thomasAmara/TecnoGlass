/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Box, Divider, Image, Stack, Text } from '@chakra-ui/react';
// import Collection from '../../Images/collections.svg';
import Collection from '../../Images/collections.svg';
import '../../Styles/productInfo.scss';
import Ceo from '../../Images/ceo.svg';

function Aboutus() {
  return (
    <div style={{ color: '#FFF' }}>
      <Box
        margin='0 auto'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        width='100%'
      >
        <div className='productBanner'>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            flexDirection={['column', 'column', 'row']}
          >
            <Box maxWidth='580px' p='20px' width='100%' alignItems='center'>
              <Text fontSize={['24px', '30px', '36px']} fontWeight='600'>
                38 years of blending technology with craftsmanship to create
                quality products and services
              </Text>
            </Box>
            <Box width={['100%', '100%', '45%']}>
              <Text fontSize='18px' fontWeight='400'>
                At Techno Glass, we are not just the experts in this field, but
                also we have the resources and labour to process almost any type
                of glass.
              </Text>
            </Box>
          </Box>
        </div>

        <Box bg='#00110E' width='100%'>
          <Box
            display='flex'
            maxWidth='1280px'
            justifyContent='center'
            p='15px 25px'
            flexDirection={['column', 'row', 'row']}
          >
            <Box display='flex' alignItems='center'>
              <Text color='#B7CC33' fontSize='48px' fontWeight='600'>
                Company :
              </Text>
            </Box>{' '}
            <Box display='flex' textAlign='center' alignItems='center'>
              <Text fontSize='36px' fontWeight='600'>
                The Future of Glass
              </Text>
            </Box>
          </Box>
          <Box width='90%' margin='0 auto' px='25px'>
            <Text fontSize='20px' fontWeight='400'>
              Technoglass Industries Limited is a subsidiary of Crystal Glass
              Nigeria Limited. Established in 2004 when the growth of the
              construction industry brought about the need to have an indigenous
              company that will manufacture and process safety glasses. With a
              multi-million naira investment in hi-tech machinery and processing
              equipment's, Techno glass is equipped with a state of the art
              furnace machine, double glazing line, laminating glass production
              line, edging machines and other glass and aluminium processing
              machines.
            </Text>
          </Box>
          <Box
            display='flex'
            justifyContent='space-around'
            width='90%'
            mt='30px'
            mb='30px'
            flexDirection={['column', 'column', 'row']}
          >
            <Box px='25px' width={['100%', '100%', '50%']}>
              <Text fontSize='20px' fontWeight='400'>
                TGI owns the biggest toughening furnace in West Africa, which
                can produce maximum size of 2440mm x 3600mm of toughened glass.
                All our products are marked with the NIS Mark of Quality and
                they conform to all local and international standards. TGI is
                accredited to be the best in hi-tech glass processing in Nigeria
                and West African sub-region. We employ a staff compliment in the
                various functions of the business consisting of computer
                controlled-numeric glass shaping machines, hi-tech toughening
                furnace, laminating line, aluminium doors and windows
                fabrication and high performance glazing. TGI is set to redefine
                and reinvigorate the ailing glass manufacturing sector of the
                Nigerian economy.
              </Text>
            </Box>

            <Box>
              <Image src={Collection} alt='' />
            </Box>
          </Box>
        </Box>
        <Box
          display='flex'
          justifyContent='center'
          flexDirection='column'
          bg='#00221B'
        >
          <Box margin='0 auto' p='20px' mb='20px' mt='25px' width='80%'>
            <Text fontSize='48px' fontWeight='700' textAlign='center'>
              We let the numbers do the talking
            </Text>
          </Box>
          <Box margin='0 auto' p='20px' mb='20px' mt='25px' width='60%'>
            <Text fontSize='20px' fontWeight='500' textAlign='center'>
              Through close partnership and synergy with top foreign companies,
              we have consistently developed and deployed cutting edge
              architectural and structural glass solution for notable government
              and private organizations in Nigeria.
            </Text>
          </Box>
          <Box
            display='flex'
            px='20px'
            py='25px'
            justifyContent='center'
            flexDirection='column'
          >
            <Stack
              margin='0 auto'
              //   width='85%'
              //   py='35px'
              direction={['column', 'row', 'row']}
              spacing={[20, 50, 190]}
              mb='70px'
            >
              <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexWrap='wrap'
                flexDirection='column'
              >
                <Text fontSize='48px' color='#B7CC33' fontWeight='700'>
                  235.000
                </Text>
                <Text fontSize='20px' fontWeight='500'>
                  Square units of glass sold
                </Text>
              </Box>
              <Box direction='column'>
                <Text fontSize='48px' color='#B7CC33' fontWeight='700'>
                  38
                </Text>
                <Text fontSize='20px' fontWeight='500'>
                  Years
                </Text>
              </Box>
              <Box direction='column'>
                <Text fontSize='48px' color='#B7CC33' fontWeight='700'>
                  +50.000
                </Text>
                <Text fontSize='20px' fontWeight='500'>
                  Project Completed
                </Text>
              </Box>
              <Box direction='column'>
                <Text fontSize='48px' color='#B7CC33' fontWeight='700'>
                  15
                </Text>
                <Text fontSize='20px' fontWeight='500'>
                  Types of Glass
                </Text>
              </Box>
            </Stack>
            <Stack
              py='30px'
              px='20px'
              width='90%'
              margin='0 auto'
              spacing={[10, 20, 40]}
              direction={['column', 'column', 'row']}
            >
              <Box
                borderRadius='16px'
                width='100%'
                maxWidth='360px'
                bg='#004436'
                p='20px'
              >
                <Text fontSize='36px' fontWeight='700'>
                  Our Vision
                </Text>
                <Divider border='1px' color='#B7CC33' />
                <Text fontSize='20px' fontWeight='500' color='##F8FAEB'>
                  “To be the indisputable market leader in the manufacturing and
                  distribution of safety glass in Nigeria and West African
                  Sub-region”
                </Text>
              </Box>
              <Box
                borderRadius='16px'
                width='100%'
                maxWidth='360px'
                p='20px'
                bg='#899926'
              >
                <Text fontSize='36px' fontWeight='700'>
                  Our Mission
                </Text>
                <Divider border='1px' color='#004436' />
                <Text fontSize='20px' fontWeight='500' color='##F8FAEB'>
                  “To provide safety, beauty and illumination to our natural
                  environment”
                </Text>
              </Box>
              <Box
                borderRadius='16px'
                width='100%'
                maxWidth='360px'
                p='20px'
                bg='#121405'
              >
                <Text fontSize='36px' fontWeight='700'>
                  Shared Values
                </Text>
                <Divider border='1px' color='#B7CC33' />
                <Box>
                  <Text fontSize='20px' fontWeight='500'>
                    <li>Service Excellence </li>
                  </Text>
                  <Text fontSize='20px' fontWeight='500'>
                    <li>Innovation </li>
                  </Text>
                  <Text fontSize='20px' fontWeight='500'>
                    <li>Integrity</li>
                  </Text>
                  <Text fontSize='20px' fontWeight='500'>
                    <li>Responsibility</li>
                  </Text>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
        <Box
          display='flex'
          flexDirection={['column', 'row', 'row']}
          justifyContent='space-between'
          bg='#00110E'
        >
          <Box margin='0 auto'>
            <Image src={Ceo} alt='' />
          </Box>
          <Box
            bg='#004436'
            w={['100%', '70%', '65%']}
            borderRadius='18px'
            p='50px'
          >
            <Text fontSize='20px' fontWeight='500'>
              He has over 35 years experience in the banking, business
              development and manufacturing sectors. He set up one of the
              foremost glass processing company in the country - Crystal Glass
              Nigeria Limited in 1994. The business began with importation of
              Louvre blades and later veered into actual production of safety
              and other forms of glasses with the establishment of Technoglass
              Industries Limited in 2004. Aluya’s giant stride in the nation’s
              manufacturing sector has garnered industrywide accolades. His
              business managerial skill is largely sought after by his peers in
              the manufacturing sector. As an active member of the Manufacturers
              Association of Nigeria since 1994, Mr John Aluya has served in
              various capacities at the branch and national level and currently
              serves as the Chairman, Corporate Planning and Strategic
              Committee. Aside from his activities in MAN, he was a former
              member of the Governing Council of the Yaba College of Technology,
              a former member of the Presidential Ad-hoc Committee on Port
              Reforms and presently a board member of the Nigeria Shippers
              Council.
            </Text>
          </Box>
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
