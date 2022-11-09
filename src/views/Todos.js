import { useEffect } from 'react'
import { VStack, Spinner } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'

import TodoList from '../components/TodoList'
import AddTodoForm from '../components/AddTodoForm'
import Heading from '../components/Heading'
import { add, load, remove } from '../actions'

function Todos() {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.items)
  const loading = useSelector((state) => state.loading)

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
      {loading ? (
        <Spinner pos="relative" top="18" />
      ) : (
        <>
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
          <AddTodoForm onAddTodo={handleAddTodo} />
        </>
      )}
    </VStack>
  )
}
export default Todos
