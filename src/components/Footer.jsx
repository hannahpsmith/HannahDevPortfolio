import { Box, Link, Flex, Icon } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaHackerrank } from 'react-icons/fa';


export default function Footer() {
    const footerStyles = {
        bg: "brand.800",
        color: "brand.300",
        py: "4",
        mt: "auto",
        width: "100%",
        bottom: "0",
    };
    const linkStyles = {
        color: "brand.300",
        _hover: {
            color: "brand.50",
          },
    };
return (
    <Box {...footerStyles}>
      <Flex justify="center" gap={6}>
        <Link href="https://www.linkedin.com/in/hannahsmithballroom/" isExternal {...linkStyles}>
          <Icon as={FaLinkedin} boxSize={6}/>
        </Link>
        <Link href="https://github.com/hannahpsmith" isExternal {...linkStyles}>
          <Icon as={FaGithub} boxSize={6} />
        </Link>
        <Link href="https://www.hackerrank.com/profile/Hannahpsmith" isExternal {...linkStyles}>
          <Icon as={FaHackerrank} boxSize={6} />
        </Link>
      </Flex>
    </Box>
  );
};