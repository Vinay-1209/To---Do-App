import TodoName from "./components/Todoname";
import AddTask from "./components/AddTask";
import TaskItems from "./components/Taskslist";
import "./App.css";
import { useState } from "react";
import Starttodo from "./components/Startingmessage";
function App() {
  const initialTodoitems = [];

  const [todoitems, setTodoitems] = useState(initialTodoitems);

  const Newtask = (taskname, taskdate) => {
    setTodoitems([...todoitems, { name: taskname, date: taskdate }]);
  };

  const handledelTask = (taskname) => {
    setTodoitems(todoitems.filter((item) => item.name !== taskname));
  };

  return (
    <center className="todo-container">
      <TodoName />
      <AddTask onNewtask={Newtask} />
      {todoitems.length === 0 ? (
        <p>No Tasks Yet.....Let's begin</p>
      ) : (
        <Starttodo />
      )}
      <TaskItems
        todoitemslist={todoitems}
        ondelclick={handledelTask}
      ></TaskItems>
    </center>
  );
}

export default App;
