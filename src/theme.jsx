import { Button, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        brand: {
            50: "#f1faee", //pale blue
            200: "#a8dadc", //light blue
            300: "#e63946f", //red
            500: "#457b9d", //medium blue
            800: "#1d3557ff", //dark blue
        }
    },
    components: {
        Button: {
            variants: {
                'with-shadow': {
                    bg: 'brand.200',
          boxShadow: '0 0 2px 2px brand.300'
                }
            } 

        }
    }
})

export default theme