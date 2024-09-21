import { Box, Button,  } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';




export default function Nav() {
    return (
        <>
          <Box p={4}>
            <Button
              fontSize={"1.1rem"}
              bg={"brand.300"}
              aria-label="About Me"
              leftIcon={<AddIcon />}
            >
              About Me
            </Button>
          </Box>
        </>
      );
    }

