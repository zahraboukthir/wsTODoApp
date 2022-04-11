import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { etask, toggle } from "../JS/Actions/actions";

const EditTask = ({ todo }) => {
  // {handeledit}
  const [edittask, setEdittask] = useState(todo.desc);
  const dispatch = useDispatch();
  const edit = () => {
    dispatch(etask(todo.id, edittask));
    dispatch(toggle());
    // handeledit(todo.id, edittask);
  };
  return (
    <div>
      <input
        type="text"
        value={edittask}
        onChange={(e) => setEdittask(e.target.value)}
      />
      <button onClick={edit}>sumbit</button>
    </div>
  );
};

export default EditTask;
