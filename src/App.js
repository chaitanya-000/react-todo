import { createContext, useState } from "react";
import "./App.css";
import AddedTask from "./component/AddedTask/AddedTask";
import InputBox from "./component/InputBox/InputBox";

export const myContext = createContext();
function App() {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEdit, setIsEdit] = useState(null);

  return (
    <myContext.Provider
      value={{
        task,
        setTask,
        taskArray,
        setTaskArray,
        toggleSubmit,
        setToggleSubmit,
        isEdit,
        setIsEdit,
      }}
    >
      <div className="App">
        <InputBox />
        <AddedTask />
      </div>
    </myContext.Provider>
  );
}

export default App;
