import { Box, Button,  } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { Link, useLocation } from 'react-router-dom';


export default function Nav() {
    const location = useLocation();

    return (
          <Box p={4}>
            <Link to="/" style={{ textDecoration: 'none' }}>

            <Button
                fontSize={"1.1rem"}
                bg={location.pathname === "/" ? "#e63946" : "brand.200"}
                aria-label="About Me"
                color={location.pathname === "/" ? "#f1faee" : "brand.800"}
                _hover={{
                background: "#f1faee",
                color: "#e63946",
              }}
              _active={{
                borderColor: '#e63946',
              }}
                leftIcon={<AddIcon />}
            >
              About Me
            </Button>
            </Link>
          </Box>

      );
    }

