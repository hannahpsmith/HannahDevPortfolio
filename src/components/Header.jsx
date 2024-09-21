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
        <h1>what do I do</h1>
        <Nav></Nav>
        </>
    )
}