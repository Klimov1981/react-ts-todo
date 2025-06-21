import TodoItem from "./TodoItem"

type Todo = {
 id: number
 text: string
 completed: boolean
}

type Props = {
 todos: Todo[]
 onToggle: (id: number) => void
 onDelete: (id: number) => void
}

function TodoList ({todos, onToggle, onDelete}: Props) {
 return (
  <div>
   {todos.map((todo)=> (
    <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
   ))}
  </div>
 )
}

export default TodoList