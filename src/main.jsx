import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// import * as React from 'react'
// import { ChakraProvider } from '@chakra-ui/react'
// import * as ReactDOM from 'react-dom/client'
// import App from './App';

// const rootElement = document.getElementById('root')
// ReactDOM.createRoot(rootElement).render(
//   <React.StrictMode>
//     <ChakraProvider>
//       <App />
//     </ChakraProvider>
//   </React.StrictMode>,
// )