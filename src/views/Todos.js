import { VStack, Spinner } from '@chakra-ui/react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import * as api from '../api'
import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'
import Heading from '../components/Heading'

function Todos() {
  const queryClient = useQueryClient()

  const { data: todos, isLoading } = useQuery({ queryKey: ['todos'], queryFn: () => api.getTodos() })

  const add = useMutation({
    mutationFn: (todo) => api.addTodo(todo),

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const remove = useMutation({
    mutationFn: (id) => api.removeTodo(id),

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const handleDeleteTodo = (id) => {
    remove.mutate(id)
  }

  const handleAddTodo = (todo) => {
    add.mutate(todo)
  }

  return (
    <VStack p="4">
      <Heading mb={8} />
      {isLoading ? (
        <Spinner pos="relative" top="18" />
      ) : (
        <>
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
          <TodoForm onAddTodo={handleAddTodo} isLoading={isLoading || add.isLoading} />
        </>
      )}
    </VStack>
  )
}
export default Todos
