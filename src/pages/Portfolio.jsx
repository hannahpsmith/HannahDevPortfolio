import React from 'react';
import { Flex, Button, Heading, Text, CardBody, Card, CardFooter, Stack, Image } from '@chakra-ui/react';
import strictlyballroom from '../assets/strictly-ballroom.jpg';
import taskboard from '../assets/task-board.jpg';
import texteditor from '../assets/text-editor.png';
import notetaker from '../assets/note-taker.png';
import bestblog from '../assets/best-blog-ever.png';
import hsb from '../assets/hannah-smith-ballroom.jpg';



export default function Portfolio() {
  return (
    <Flex justifyContent="center" flexDirection="column" m={{base: 2, md: 6}} p={{base: 4, md: 6}}>
      <Card 
        m="3"
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={strictlyballroom}
          alt='Strictly Ballroom'
        />
        <Stack>
          <CardBody>
            <Heading size='md'>Strictly Ballroom</Heading>
            <Text py='2'>
              A globally recognized top competition dance studio.
            </Text>
          </CardBody>

          <CardFooter>
            <Button as="a" href="https://github.com/hannahpsmith/strictly-ballroom" variant='solid' colorScheme='blue' m={2}>
              View Github
            </Button>
            <Button as="a" href="https://strictly-ballroom.onrender.com/" variant='solid' colorScheme='blue' m={2}>
              View Application
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      <Card
        m="3"
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={hsb}
          alt='Hannah Smith Ballroom'
        />
        <Stack>
          <CardBody>
            <Heading size='md'>Hannah Smith Ballroom</Heading>
            <Text py='2'>
              A refined dance studio specializing in social dance and wedding first dances.
            </Text>
          </CardBody>

          <CardFooter>
            <Button as="a" href="https://github.com/hannahpsmith/hannah-smith-ballroom" variant='solid' colorScheme='blue' m={2}>
              View Github
            </Button>
            {/* hsb will be deployed soon */}
            <Button as="a" href="https://hannahsmithballroom.com" variant='solid' colorScheme='blue' m={2}>
              View Application
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      <Card
        m="3"
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={texteditor}
          alt='Incredible Text Editor'
        />
        <Stack>
          <CardBody>
            <Heading size='md'>Incredible Text Editor</Heading>
            <Text py='2'>
              Not just another text editor!
            </Text>
          </CardBody>

          <CardFooter>
            <Button as="a" href="https://github.com/hannahpsmith/incredible-text-editor" variant='solid' colorScheme='blue' m={2}>
              View Github
            </Button>
            <Button as="a" href="https://incredible-text-editor.onrender.com/" variant='solid' colorScheme='blue' m={2}>
              View Application
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      <Card
        m="3"
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={notetaker}
          alt='Note Taker'
        />
        <Stack>
          <CardBody>
            <Heading size='md'>Note Taker</Heading>
            <Text py='2'>
              An easy-to-use note taker!
            </Text>
          </CardBody>

          <CardFooter>
            <Button as="a" href="https://github.com/hannahpsmith/note-taker" variant='solid' colorScheme='blue' m={2}>
              View Github
            </Button>
            <Button as="a" href="https://note-taker-1-y2lx.onrender.com/" variant='solid' colorScheme='blue' m={2}>
              View Application
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      <Card
        m="3"
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={bestblog}
          alt='Best Blog Ever'
        />
        <Stack>
          <CardBody>
            <Heading size='md'>Best Blog Ever</Heading>
            <Text py='2'>
              The best blog you've ever seen
            </Text>
          </CardBody>

          <CardFooter>
            <Button as="a" href="https://github.com/hannahpsmith/Best-Blog-Ever" variant='solid' colorScheme='blue' m={2}>
              View Github
            </Button>
            <Button as="a" href="https://hannahpsmith.github.io/Best-Blog-Ever/" variant='solid' colorScheme='blue' m={2}>
              View Application
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      <Card
        m="3"
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={taskboard}
          alt='Task Board'
        />
        <Stack>
          <CardBody>
            <Heading size='md'>Task Board</Heading>
            <Text py='2'>
              A simple kanban board
            </Text>
          </CardBody>

          <CardFooter>
            <Button as="a" href="https://github.com/hannahpsmith/task-board" variant='solid' colorScheme='blue' m={2}>
              View Github
            </Button>
            <Button as="a" href="https://hannahpsmith.github.io/task-board/" variant='solid' colorScheme='blue' m={2}>
              View Application
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </Flex>
  );
}