import { useState } from "react"

type Props = {
 onAdd: (text: string) => void
}

function AddTodoForm({onAdd}: Props) {
 const [text, setText] = useState('')

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  if (text.trim()) {
   onAdd(text)
   setText('')
  }
 }
 return(
  <form onSubmit={handleSubmit}>
   <input 
   type="text"
   placeholder="Что нужно сделать?"
   value={text}
   onChange={(e) => setText(e.target.value)} />
   <button >Добавить</button>
  </form>
 )
}

export default AddTodoForm