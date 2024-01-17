import ToDoItems from "../toDoItems/ToDoItems";


const ToDoList = ({toDos}) => {
    return ( 
        <>
        <h1>My Todos</h1>
        {toDos.map((toDo, index) => {
            return(
                <ul key = {index}>
                    <ToDoItems
                    toDo = {toDo.title}
                    />
                </ul>
            )
        })}
        </>
    );
}

export default ToDoList;