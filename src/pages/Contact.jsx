import { Container, Flex, Box, Heading, Text, IconButton, Button, VStack, HStack, Wrap, WrapItem, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Textarea, } from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn, MdFacebook, MdOutlineEmail, } from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gc7poaz', 'template_uoyxink', form.current, {
        publicKey: '5POw6jrUjAraRqTlN',
      })
      .then(
        () => {
          setSuccessMessage('Message Sent!');
          setFormData({ user_name: '', user_email: '', message: '' });
          form.current.reset(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <Flex justifyContent="center" alignItems="center"> 
    <Box bg="brand.800" color="brand.50" borderRadius="md" boxShadow="lg" m={{ sm: 4, md: 5, lg: 6 }}
    p={{ sm: 5, md: 5, lg: 6 }} maxW='800px' mx='auto'>
          <Box p={4}>
          <Heading align="center" pb={{ sm: 3, md: 5, lg: 6 }}>Contact</Heading>

            <Wrap spacing={{ sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack alignItems="flex-start" spacing={3}>
                      <Button
                        as="a"
                        href="tel:+12537976890"
                        size="md"
                        height="48px"
                        width="100%"
                        variant="ghost"
                        color="brand.50"
                        _hover={{ border: '4px solid #a8dadc' }}
                        leftIcon={<MdPhone color="#e63946" size="20px" />}>
                        +1 253-797-6890
                      </Button>
                      <Button
                        as="a"
                        href="mailto:hannahpsmith94@gmail.com"
                        size="md"
                        height="48px"
                        width="100%"
                        variant="ghost"
                        color="brand.50"
                        _hover={{ border: '4px solid #a8dadc' }}
                        leftIcon={<MdEmail color="#e63946" size="20px" />}>
                        hannahpsmith94@gmail.com
                      </Button>
                      <Button
                        as="a"
                        href="https://www.google.com/search?q=Salt+Lake+City+UTAH"
                        target="_blank"
                        size="md"
                        height="48px"
                        width="100%"
                        variant="ghost"
                        color="brand.50"
                        _hover={{ border: '4px solid #a8dadc' }}
                        leftIcon={<MdLocationOn color="#e63946" size="20px" />}>
                        Salt Lake City, UT
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
              <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <form ref={form} onSubmit={sendEmail}>
                          <FormControl id="name" isRequired>
                            <FormLabel>Your Name</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement pointerEvents="none">
                                <BsPerson color="gray.800" />
                              </InputLeftElement>
                              <Input type="text" name="user_name" size="md" value={formData.user_name} onChange={handleChange} />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="email" isRequired>
                            <FormLabel>Email</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement pointerEvents="none">
                                <MdOutlineEmail color="gray.800" />
                              </InputLeftElement>
                              <Input type="email" name="user_email" size="md" value={formData.user_email} onChange={handleChange} />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="message" isRequired>
                            <FormLabel>Message</FormLabel>
                            <Textarea
                              name="message"
                              borderColor="gray.300"
                              _hover={{ borderColor: 'gray.300' }}
                              value={formData.message}
                              onChange={handleChange}
                            />
                          </FormControl>
                          <FormControl id="send" float="right">
                            <Button variant="solid" bg="brand.300" color="brand.50" type="submit" _hover={{}}>
                              Send Message
                            </Button>
                          </FormControl>
                        </form>
                      </VStack>
                      {successMessage && <Text color="green.600" fontSize="xl" fontWeight="bold">{successMessage}</Text>} {/* Display success message */}
                    </Box>
                  </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
  );
};

export default Contact