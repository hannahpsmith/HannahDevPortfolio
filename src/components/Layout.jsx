import Header from './Header';
import { Box, Container } from '@chakra-ui/react';

export default function Layout({ children }) {
  return (
    <Box>
      <Header />
      <Container as="main" maxW="container.xl" py={4}>
        {children}
      </Container>
    </Box>
  );
}