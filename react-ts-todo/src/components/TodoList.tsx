import type {Todo, TodoListProps } from '../types';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  return (
    <div>
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TodoList;