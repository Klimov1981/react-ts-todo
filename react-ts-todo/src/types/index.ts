// src/types/index.ts

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export type AddTodoFormProps = {
  onAdd: (text: string) => void;
};