import {
  ADDTask,
  DELETETASK,
  EDITTASK,
  TOGGLE,
} from "../Actionstypes/actionstypes";

export const addtask = (newtask) => {
  return {
    type: ADDTask,
    payload: newtask,
  };
};
export const etask = (id, newname) => {
  return {
    type: EDITTASK,
    payload: { id, newname },
  };
};
export const deletetask = (id) => {
  return {
    type: DELETETASK,
    payload: id,
  };
};
export const toggle = () => {
  return {
    type: TOGGLE,
  };
};
