
import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getLocalStorageData, setLocalStorageData } from "./TodoLocalStorage";




export const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageData());

  
  const formSubmit = (inputValue) => {
    const {id, content, checked} = inputValue;
    if (!content) return;
    // if (task.includes(inputValue)) return;

    const todoContentMatch = task.find((currentTask) => {
      currentTask.content === content;
    })
    if(todoContentMatch) return;

    setTask((prev) => [...prev, {id, content, checked}]);
  };

  //localStorage for todo data
  setLocalStorageData(task);
 
  //delete todo

  const handleDeleteTodo = (value) => {
    const updateTask = task.filter((currentTask) => currentTask.content !== value);
    setTask(updateTask);
  };
  //clear data for all todo

  const clearAllTodo = () => {
    setTask([]);
  };

  const handleCheckedTodo = (checkTask) =>{
    const updateCheckTask = task.map((newValue) => {
      if(newValue.content === checkTask) {
        return {...newValue, checked: !newValue.checked}
      }else{
        return newValue;
      }
    })
    setTask(updateCheckTask)
  }

  return (
    <section className="container">
      <header>
        <h2>Todo App</h2>
        <TodoDate/>
      </header>
     <TodoForm onAddTodo={formSubmit}/>
      <section>
        <ul className="list">
          {task.map((currenTask) => {
            return (
              <TodoList
                key={currenTask.id}
                data={currenTask.content}
                checked={currenTask.checked}
                onhandleDeleteTodo={handleDeleteTodo}
                onHandleCheckedTodo={handleCheckedTodo}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={clearAllTodo}>
          Clear All
        </button>
      </section>
    </section>
  );
};
