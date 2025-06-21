import styles from './TodoItem.module.css'

type Todo = {
 id: number
 text: string
 completed: boolean
}

type Props = {
 todo: Todo
 onToggle: (id: number) => void
 onDelete: (id: number) => void
}

function TodoItem({ todo, onToggle, onDelete }: Props) {
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