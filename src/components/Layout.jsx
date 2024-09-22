import Header from './Header';
import { Box, Container } from '@chakra-ui/react';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Container as="main" flex="1" maxW="container.xl" py={4}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
}