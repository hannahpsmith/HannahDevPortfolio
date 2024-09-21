// import '../styles/Header.css';
import { Box, Flex, Heading } from '@chakra-ui/react';

export default function Header() {
    const styles = {
        customHeader: {
            fontFamily: 'sans-serif',
        }
    };

    return (
        <Box as="header" bg={isDark ? 'gray.800' : 'black'} px={4} py={4} shadow="md">
        <Flex align="center" justify="space-between">
          <Heading as="h1" size="lg" color={isDark ? 'white' : 'gray.800'}>
            Hannah Smith
          </Heading>
        </Flex>
      </Box>
    )
}