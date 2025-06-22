import { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import type {Todo} from './types'



function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Позаниматься React', completed: false },
    { id: 2, text: 'Вынести мусор', completed: true }
  ]);

  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h1>📝 To-Do List</h1>
      <AddTodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}

export default App;