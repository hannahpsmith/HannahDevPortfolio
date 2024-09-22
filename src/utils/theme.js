import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        brand: {
            50: "#f1faee", //pale blue
            200: "#a8dadc", //light blue
            300: "#e63946", //red
            500: "#457b9d", //medium blue
            800: "#1d3557", //dark blue
        }
    },
    styles: {
        global: {
          body: {
            bg: 'brand.500', 
            color: 'brand.800',
          },
        },
      },

    
});

export default theme