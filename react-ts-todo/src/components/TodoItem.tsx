import styles from './TodoItem.module.css'

import type {Todo, TodoListProps } from '../types'

type TodoItemProps = {
 todo: Todo
 onToggle: TodoListProps['onToggle']
 onDelete: TodoListProps['onDelete']
}

function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
 return (
  <div className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}>
   <span onClick={() => onToggle(todo.id)} style={{ cursor: 'pointer' }}>
    {todo.completed ? '✅' : '🔲'} {todo.text}
   </span>
   <button onClick={() => onDelete(todo.id)}>🗑</button>
  </div>
 )
}

export default TodoItem