import { Box, Button,  } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';




export default function Nav() {
    const styles = {
      button: {
        fontSize: '32px',
      },  
    }

    return (
    <>
    <Box p={4}>
        <Button aria-label='About Me' leftIcon={<AddIcon/>}  styles={styles.button}>About Me</Button>
    </Box>
    </>
    )
}

