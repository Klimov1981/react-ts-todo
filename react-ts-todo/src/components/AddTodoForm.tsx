import { useState } from "react"
import type { AddTodoFormProps } from '../types'
import styles from './AddTodoForm.module.css'



function AddTodoForm({onAdd}: AddTodoFormProps) {
 const [text, setText] = useState('')

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  if (text.trim()) {
   onAdd(text)
   setText('')
  }
 }
 return(
  <form className={styles.form} onSubmit={handleSubmit}>
   <input 
   type="text"
   placeholder="Что нужно сделать?"
   value={text}
   onChange={(e) => setText(e.target.value)} />
   <button className={styles.button}>Добавить</button>
  </form>
 )
}

export default AddTodoForm