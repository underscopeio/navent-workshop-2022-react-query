import { VStack, Button, Text, Spinner } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

import * as api from '../api'
import Heading from '../components/Heading'

function Intro() {
  const { data: todos, isLoading } = useQuery({ queryKey: ['todos'], queryFn: () => api.getTodos() })

  return (
    <VStack p="4" h="100%" justifyContent="center">
      <Heading />
      <Text pb="10">You currently have {isLoading ? <Spinner size="xs" /> : todos.length} undone tasks</Text>
      <Button>
        <Link to="/todos">Go to the List</Link>
      </Button>
    </VStack>
  )
}
export default Intro
