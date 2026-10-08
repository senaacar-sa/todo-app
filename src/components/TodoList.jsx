import { useState,useEffect } from "react";
import TodoItem from "./TodoItem";
import FilterBar from "./FilterBar";
import AddTodo from "./AddTodo";
function TodoList() {
const [todos, setTodos] = useState(() => {
  const saved = localStorage.getItem('todos')
  if (saved) {
    return JSON.parse(saved)
  }
  return [
    { id: 1, text: 'Ders çalış', done: true },
    { id: 2, text: 'Spor yap', done: false },
    { id: 3, text: 'Kitap oku', done: false },
  ]
})

const [filter, setFilter] = useState('all')
useEffect(()=>{localStorage.setItem('todos',JSON.stringify(todos))}
,[todos]
)


function handleAdd(newText){
const newTodos={id:Date.now(),text:newText,done:false}
setTodos([...todos,newTodos])

}

function handleDelete(id){
setTodos(todos.filter((todo)=> todo.id !==id))

}
function handleToggle(id) {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    )
  )
}
const doneCount = todos.filter((todo) => todo.done).length
const visibleTodos = todos.filter((todo) => {
  if (filter === 'active') return !todo.done
  if (filter === 'done') return todo.done
  return true
})
  return (
<div>
{todos.length>0 &&  <p className="counter">{todos.length} görevden {doneCount} tanesi tamamlandı</p>}
  
<AddTodo onAdd={handleAdd} />

<FilterBar filter={filter} onFilterChange={setFilter}/>
    {visibleTodos.length === 0 && <p className="empty" >Henüz buralarda veri yok </p>}
    <ul className="todo-list">
   
      
       {visibleTodos.map((todo) => (
         <TodoItem key={todo.id} text={todo.text} done={todo.done} onDelete={() => handleDelete(todo.id)} onToggle={() => handleToggle(todo.id)} />
        ))}
      
    </ul>
        </div>
  );
}
export default TodoList;
