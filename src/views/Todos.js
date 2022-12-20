import { useEffect } from 'react'
import { VStack, Spinner } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'

import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'
import Heading from '../components/Heading'
import { add, load, remove } from '../actions'

function Todos() {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.items)
  const isLoading = useSelector((state) => state.loading)
  const isAdding = useSelector((state) => state.adding)

  useEffect(() => {
    dispatch(load())
  }, [dispatch])

  const handleDeleteTodo = (id) => {
    dispatch(remove(id))
  }

  const handleAddTodo = (todo) => {
    dispatch(add(todo))
  }

  return (
    <VStack p="4">
      <Heading mb={8} />
      {isLoading ? (
        <Spinner pos="relative" top="18" />
      ) : (
        <>
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
          <TodoForm onAddTodo={handleAddTodo} isLoading={isAdding} />
        </>
      )}
    </VStack>
  )
}
export default Todos
