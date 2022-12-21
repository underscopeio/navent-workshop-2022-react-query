import React, { useState } from 'react'
import { HStack, Input, Button, useToast } from '@chakra-ui/react'
import { nanoid } from 'nanoid'

const TodoForm = ({ onAddTodo, isLoading }) => {
  const [content, setContent] = useState('')
  const toast = useToast()

  function handleSubmit(e) {
    e.preventDefault()

    if (!content) {
      toast({
        title: 'No content',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })

      return
    }

    const todo = {
      id: nanoid(),
      body: content,
    }

    onAddTodo(todo)

    setContent('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="Enter Task"
          value={content}
          disabled={!onAddTodo || isLoading}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button isLoading={isLoading} type="submit" colorScheme="cyan" px="8">
          Add Todo
        </Button>
      </HStack>
    </form>
  )
}
export default TodoForm
