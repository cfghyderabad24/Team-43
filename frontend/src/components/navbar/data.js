import React from 'react';
import { Text, Stack, Box, Heading, Img, Container } from "@chakra-ui/react";

const Card = () => {
  return (
    <Box>
      <Container minH={'100vh'} maxW={"container.xl"} padding={16}>
        <Heading textTransform={"uppercase"} py="2" w={'fit-content'} m={'auto'} borderBottom={'2px solid'}>Who are we</Heading>
        <Stack h='full' p={"4"} alignItems={'center'} direction={['column', 'row']}>
          <Box flexBasis={["100%", "60%"]} flex={1} display="flex" justifyContent="center">
            <Img 
              src="https://tse1.mm.bing.net/th?id=OIP.aMhRzT4AWB0UW_b5Fd5wKAHaE4&pid=Api&P=0&h=180"
              h={["300px", "400px"]} 
              w={["200px", "400px"]} 
              filter={'hue-rotate(-130deg)'}
            />
          </Box>
          <Box
            flexBasis={["100%", "40%"]}
            flex={1}
            p={['4', '16']}
            display="flex"
            alignItems="center"
            borderRadius="md"
            boxShadow="0px 4px 8px rgba(128, 128, 128, 0.5)" 
            marginTop={'50px'}
            marginRight={'100px'}
            py="10"
            px="40"
            bg="white" 
            fontFamily={'sans-serif'}
          >
            <Text marginTop={'70px'} letterSpacing={'widest'} lineHeight={'190%'} textAlign={'center'}>
              We are a group of like-minded individuals who gather to address the fallouts of climate change, gender inequalities, and detrimental health practices that exist in our urban and rural communities, by engaging different social strata in a comprehensive manner.
              We take every individual act as a collaborative means to create a collective that stands together to eradicate social inequalities and existing detrimental practices that affect our climate, families/communities, and bodies.
              We strongly and efficiently support and encourage our individuals and communities to take informed decisions that will benefit their lives and create a holistic society where everyone is treated equally with respect, care, and effort.
              We believe that the vulnerable communities would continue to suffer in existent conditions as a muted population if their foundational concerns aren’t addressed keeping their struggles for basics at the forefront.
              For a sustainable and all-pervasive ecosystem of support, we at Good Universe pledge to counter the conditions plagued by indifferent policy-making and situational non-interventions.
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Card;
