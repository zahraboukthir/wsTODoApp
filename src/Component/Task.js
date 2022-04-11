import React from "react";
import EditTask from "./EditTask";
import { deletetask, toggle } from "./../JS/Actions/actions";
import { useDispatch, useSelector } from "react-redux";

const Task = ({ todo }) => {
  // {handeledit}
  const dispatch = useDispatch();
  const show = useSelector((state) => state.status);
  console.log(show);
  return (
    <div>
      <p>{todo.desc} </p>
      <button>com/notcomp</button>
      <button onClick={() => dispatch(deletetask(todo.id))}>delete</button>
      <button onClick={() => dispatch(toggle())}>EDIT</button>
      {show ? <EditTask todo={todo} /> : ""}
      {/* <EditTask handeledit={handeledit} todo={todo} /> */}
    </div>
  );
};

export default Task;
