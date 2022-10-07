import { useState } from "react";
import "./App.css";
import AddedTask from "./component/AddedTask/AddedTask";
import InputBox from "./component/InputBox/InputBox";

function App() {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEdit, setIsEdit] = useState(null);

  return (
    <div className="App">
      <InputBox
        task={task}
        setTask={setTask}
        taskArray={taskArray}
        setTaskArray={setTaskArray}
        toggleSubmit={toggleSubmit}
        setToggleSubmit={setToggleSubmit}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
      />
      <AddedTask
        task={task}
        setTask={setTask}
        taskArray={taskArray}
        setTaskArray={setTaskArray}
        toggleSubmit={toggleSubmit}
        setToggleSubmit={setToggleSubmit}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
      />
    </div>
  );
}

export default App;
