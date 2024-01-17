
import './App.css'
import ToDoList from './assets/components/toDoList/ToDoList'
import toDos from "./assets/data/toDos"

function App() {

  return (
    <>
      <ToDoList toDos = {toDos}/>
    </>
  )
}

export default App
