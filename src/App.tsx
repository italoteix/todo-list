import { useState } from 'react'

import { AddForm } from './components/AddForm'
import { Header } from './components/Header'
import { TodoHeader } from './components/TodoHeader'
import { Todos, type Todo } from './components/Todos'

import styles from './App.module.css'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    setTodos(prevState => [...prevState, { id: Date.now(), checked: false, text }])
  }

  const deleteTodo = (id: number) => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id: number) => {
    setTodos(prevState => {
      return prevState.map(todo => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked }
        }
        return todo
      })
    })
  }

  return (
    <>
      <Header />
      <main className={styles.container}>
        <AddForm onAddTodo={addTodo} />
        <TodoHeader todos={todos} />
        <Todos todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
      </main>
    </>
  )
}

export default App
