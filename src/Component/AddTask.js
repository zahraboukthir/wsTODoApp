import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask } from "../JS/Actions/actions";

const AddTask = () => {
  // { handeladd } 9bal redux
  const dispatch = useDispatch();
  const [desc, setDesc] = useState("");
  const handelsubmit = () => {
    dispatch(addtask({ id: Math.random(), isdone: false, desc }));
    // handeladd({ id: Math.random(), isdone: false, desc });
    setDesc("");
  };
  return (
    <div>
      <input
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button onClick={handelsubmit}>add task</button>
    </div>
  );
};

export default AddTask;
