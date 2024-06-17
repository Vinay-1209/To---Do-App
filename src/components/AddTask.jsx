import { MdOutlinePostAdd } from "react-icons/md";
import { useState, useRef } from "react";
import css from "./AddTask.module.css";

function AddTask({ onNewtask }) {
  /*const [todoname, settodoname] = useState("");
  const [tododate, settododate] = useState("");

  const handlenamechange = (event) => {
    settodoname(event.target.value);
  };

  const handledatechange = (event) => {
    settododate(event.target.value);
  };

  const afterclick = (event) => {
    event.preventDefault();
    onNewtask(todoname, tododate);
    settodoname("");
    settododate("");
  };*/

  /* using useRef lets do again */
  /* we have changed the function calling from task input and date input*/
  /* by using useState we are getting the data after every simple update*/
  /* by using useRef we are making a referance direct to the input box*/
  /* like this we are getting the final value easily and also one time */

  const todoTaskElement = useRef();
  const todoDateElement = useRef();

  const afterclick = (event) => {
    event.preventDefault();
    const todoTask = todoTaskElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoTaskElement.current.value = "";
    todoDateElement.current.value = "";
    onNewtask(todoTask, todoDate);
  };

  return (
    <div className="container ">
      <form className="row myrow" onSubmit={afterclick}>
        <div className="col-6">
          <input
            ref={todoTaskElement}
            type="text"
            placeholder="Enter the task to-do"
          ></input>
        </div>
        <div className="col-4">
          <input ref={todoDateElement} type="date" />
        </div>
        <div className="col-2 ">
          <button type="submit" className={`${css.mybutton} btn btn-info`}>
            <MdOutlinePostAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
