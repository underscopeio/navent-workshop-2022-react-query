import { Heading as ChakraHeading } from '@chakra-ui/react'

const Heading = () => {
  return (
    <ChakraHeading
      mb="8"
      fontWeight="extrabold"
      size="2xl"
      bgGradient="linear(to-r, cyan.400, purple.400, pink.400)"
      bgClip="text"
    >
      To Do List Application
    </ChakraHeading>
  )
}

export default Heading
