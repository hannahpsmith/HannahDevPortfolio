import React from 'react';
import HannahSmithResume from '../assets/Hannah-Smith-Resume.pdf'
import { Flex, Button, Box, UnorderedList, ListItem } from '@chakra-ui/react';

export default function Resume() {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Box bg="brand.800" color="brand.50" borderRadius="md" boxShadow="lg" m={{ sm: 6, md: 8, lg: 10 }} p={{ sm: 4, md: 5, lg: 6 }} maxW='400px'>
        <Button as="a" href={HannahSmithResume} download="Hannah-Smith-Resume.pdf">
          Download Resume
        </Button>
        <UnorderedList fontSize="lg" m={4}>
          <ListItem>Javascript</ListItem>
          <ListItem>React</ListItem>
          <ListItem>MongoDB</ListItem>
          <ListItem>Postgres</ListItem>
          <ListItem>Node</ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
}