import { ADDTask, EDITTASK, TOGGLE } from "../Actionstypes/actionstypes";
import { DELETETASK } from "./../Actionstypes/actionstypes";

const initialState = {
  tasks: [
    { id: Math.random(), desc: "learn web1", isdone: true },
    { id: Math.random(), desc: "learn web2", isdone: false },
    { id: Math.random(), desc: "learn web3", isdone: false },
  ],
  status: false,
};

const taskreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDTask:
      return { ...state, tasks: [...state.tasks, payload] };
    case EDITTASK:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === payload.id ? { ...el, desc: payload.newname } : el
        ),
      };
    case DELETETASK:
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id !== payload),
      };
    case TOGGLE:
      return { ...state, status: !state.status };
    default:
      return state;
  }
};
export default taskreducer;
