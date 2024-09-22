import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import Nav from './Navigation';
import HS from '../assets/name-white.png'

export default function Header() {


    return (
        <>
        <Box position="relative" w="100%">
        <Box bg='brand.800' w='100%' p={1}>

        <Box
          position="absolute"
          top="128"
          left="0"
          right="0"
          height="30%"
          zIndex="0"
          bgGradient="linear(to bottom, rgba(29, 53, 87, 1), rgba(0, 0, 0, 0))"
        />
        <Flex justify={['center', 'space-between']}>
            <Image src={HS} height={20} minW={265} obectFit='cover' ></Image>
        </Flex>
        <Nav></Nav>
        </Box>
        </ Box>

        </>
    )
}