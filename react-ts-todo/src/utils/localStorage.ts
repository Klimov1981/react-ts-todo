import type { Todo } from "../types"

const STORAGE_KEY = 'todo-list'

export const saveTodos = (todos: Todo[]): void => {
 localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
}

export const loadTodos = (): Todo[] => {
 const data = localStorage.getItem(STORAGE_KEY)
 return data ? JSON.parse(data) : []
}