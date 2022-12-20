import { useEffect } from 'react'
import { VStack, Button, Text, Spinner } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Heading from '../components/Heading'
import { load } from '../actions'

function Intro() {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.items)
  const isLoading = useSelector((state) => state.loading)

  useEffect(() => {
    dispatch(load())
  }, [dispatch])

  return (
    <VStack p="4" h="100%" justifyContent="center">
      <Heading />
      <Text pb="10">
        You currently have <b>{isLoading ? <Spinner size="xs" /> : todos.length}</b> undone tasks
      </Text>
      <Button>
        <Link to="/todos">Go to the List</Link>
      </Button>
    </VStack>
  )
}
export default Intro
