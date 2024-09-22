import { Box, Heading, Text, Flex, Image } from '@chakra-ui/react';
import headshot from '../assets/headshot.jpg';

export default function AboutMe() {
  return (
    <Box p={6} bg="brand.50" borderRadius="md" boxShadow="lg" mt={6} maxW='800px' mx='auto'>
        <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
        <Image 
              src={headshot} 
              alt="image of Hannah Smith" 
              boxSize="200px" 
              borderRadius="full" 
              boxShadow="lg"
              objectFit="cover"
              mr={4}
              mb={6}
            />
          <Box textAlign="center" mb={6}>
            <Heading as="h1" size="xl" mb={4}>
              Hannah Smith
            </Heading>
              <Text fontSize="lg" mb={4}>
                I am a passionate Software Engineer who excels at building innovative web applications. Specializing in full-stack development, I create robust and scalable solutions using technologies like JavaScript, Node.js, PostgreSQL, Sequelize, and more. I thrive on tackling complex problems and finding elegant solutions to enhance user experience and performance. Collaboration and attention to detail are central to my approach, as I believe the best outcomes come from working closely with others and continuously refining my work.
              </Text>
              <Text fontSize="lg" mb={4}>
              When I’m not coding, I enjoy teaching dance, where I share my love for movement and rhythm. This creative outlet keeps me energized and inspired, helping me bring a fresh perspective to every project.
              </Text>
              <Text fontSize="lg" mb={4}>
                Let’s connect and see how we can build something amazing together!
              </Text>
          </Box>
        </Flex>
    </Box>
  );
}

