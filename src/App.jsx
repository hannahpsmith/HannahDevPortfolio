import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './utils/theme';
import Layout from './components/Layout';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Outlet />
      </Layout>
    </ChakraProvider>
  );
}
