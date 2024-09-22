import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import Nav from './Navigation';
import HS from '../assets/name-white.png'

export default function Header() {


    return (
        <>
        <Box bg='brand.800' w='100%' p={4} color='white'>
        <Flex justify={['center', 'space-between']}>
        <Image src={HS} height={20} minW={265} obectFit='cover' ></Image>
        </Flex>
        <Nav></Nav>
        </ Box>
        </>
    )
}