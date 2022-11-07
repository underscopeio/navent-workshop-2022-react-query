const BASE_URL = '//localhost:4000'

export const getTodos = async () => {
  const data = await fetch(`${BASE_URL}/items`)

  return data.json()
}

export const addTodo = async (todo) => {
  const params = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  }

  const data = await fetch(`${BASE_URL}/items`, params)

  return data.json()
}

export const removeTodo = async (id) => {
  const params = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  await fetch(`${BASE_URL}/items/${id}`, params)

  return
}
