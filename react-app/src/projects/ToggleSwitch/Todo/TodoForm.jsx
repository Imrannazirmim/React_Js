import { useState } from "react";


export const TodoForm = ({onAddTodo}) => {
  const [inputValue, setInputValue] = useState("");

  const handleFormEl = (value) => {
    setInputValue({id: value, content: value, checked: false});
  };

  const formSubmit = (event) => {
    event.preventDefault()
    onAddTodo(inputValue);
    setInputValue({id: '', content: '', checked: false})
  }

    return (
      <section>
        <form className="form" onSubmit={formSubmit}>
          <div>
            <input
              type="text"
              autoComplete="off"
              value={inputValue.content}
              onChange={(event) => handleFormEl(event.target.value)}
            />
          </div>
          <div>
            <button type="submit">Add Task</button>
          </div>
        </form>
      </section>
    );
}