import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Link, Menu, MenuButton, MenuList, MenuItem, Button, textDecoration, border } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';


export default function Nav() {
  const buttonStyles = {
    fontSize: "1.1rem",
    bg: "brand.200",
    color: "brand.800",
    _hover: {
      bg: "brand.50",
      color: "brand.300",
    },
    _active: {
      borderColor: "brand.300",
      border: "2px",
    },

  }
    return (
      <Flex as="nav" className="navbar-links" gap={5} position="relative" bottom={1} 
                          direction={['column', 'row']}
                          justify={['center', 'flex-end']}
                          align='left'
                          w='100%'
                          pt={[4,0]}
                          >
        <Button as={RouterLink} to="/about" {...buttonStyles} aria-label={"About Me"}>
          About Me
        </Button>
        <Button as={RouterLink} to="/portfolio" {...buttonStyles} aria-label={"Button"}>
          Portfolio
        </Button>
        <Button as={RouterLink} to="/resume" {...buttonStyles} aria-label={"Resume"}>
          Resume
        </Button>
        <Button as={RouterLink} to="/contact" {...buttonStyles} aria-label={"Contact"}>
          Contact
        </Button>
        </Flex>





      );
    }