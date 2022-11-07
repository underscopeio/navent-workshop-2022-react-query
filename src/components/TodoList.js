import React from 'react'
import { VStack, StackDivider, HStack, Text, Spacer, IconButton, Badge, Spinner } from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa'

const TodoList = ({ todos, onDeleteTodo }) => {
  if (!todos.length) {
    return (
      <Badge colorScheme="cyan" p="4" borderRadius="lg">
        Enter New Task 👇
      </Badge>
    )
  }

  return (
    <VStack
      divider={<StackDivider />}
      borderWidth="2px"
      borderColor="gray.100"
      borderRadius="lg"
      padding="4"
      w="100%"
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      alignItems="stretch"
    >
      {todos.map((todo) => (
        <HStack key={todo.id} pos="relative">
          <Text>{todo.body}</Text>
          <Spacer />
          {todo.pending ? <Spinner pos="absolute" right="2" /> : undefined}
          <IconButton
            icon={<FaTrash />}
            isRound="true"
            onClick={() => onDeleteTodo(todo.id)}
            visibility={todo.pending ? 'hidden' : undefined}
          />
        </HStack>
      ))}
    </VStack>
  )
}

export default TodoList
