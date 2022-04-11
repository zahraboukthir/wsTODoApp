import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  // { listtasks, handeledit } 9abal min 8ir redux
  const listtasks = useSelector((state) => state.tasks);
  return (
    <div>
      {listtasks.map((todo, i) => (
        <Task todo={todo} key={i} />
      ))}
    </div>
  );
};

export default ListTask;
