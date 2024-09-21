// import '../styles/Header.css';
import { Box, Flex, Heading } from '@chakra-ui/react';
import Nav from './Navigation';

export default function Header() {
    const styles = {
        customHeader: {
            fontFamily: 'sans-serif',
        }
    };

    return (
        <>
        <Box bg='brand.800' w='100%' p={4} color='white'>
        <h1>header note</h1>
        <Nav></Nav>
        </ Box>
        </>
    )
}