import React, { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { without } from "lodash";

function App() {
  const [todoItem, setTodoItem] = useState([
    "Going to the market to buy groceries",
    "Learning to code especially react and express",
    "Creating a todo list app with react ",
  ]);

  const handleTodo = (item) => {
    console.log(`Received ${item}`);
    if (item === "") {
      return;
    } else {
      setTodoItem([...todoItem, item]);
    }
  };

  const handleSelected = (selected) => {
    const newData = without(todoItem, todoItem[selected]);
    setTodoItem(newData);
  };

  return (
    <div>
      <Heading />
      <InputField textValue={handleTodo} />
      <TodoList todoItem={todoItem} isSelected={handleSelected} />
    </div>
  );
}

export default App;
