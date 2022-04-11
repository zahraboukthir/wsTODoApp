import { useState } from "react";
import "./App.css";
import AddTask from "./Component/AddTask";
import FilterTask from "./Component/FilterTask";
import ListTask from "./Component/ListTask";

function App() {
  // const [listtasks, setListtasks] = useState([
  //   { id: Math.random(), desc: "learn web1", isdone: true },
  //   { id: Math.random(), desc: "learn web2", isdone: false },
  //   { id: Math.random(), desc: "learn web3", isdone: false },
  // ]);
  // const handeladd = (newtodo) => {
  //   setListtasks([...listtasks, newtodo]);
  // };
  // const handeledit = (id, newdesc) => {
  //   setListtasks(
  //     listtasks.map((e) => (e.id === id ? { ...e, desc: newdesc } : e))
  //   );
  // };
  return (
    <div className="App">
      {/* <AddTask handeladd={handeladd} />
      <FilterTask />
      <ListTask listtasks={listtasks} handeledit={handeledit} /> */}
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
