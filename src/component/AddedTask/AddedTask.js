import React, { useContext, useState } from "react";
import "./AddedTask.css";
import { MdDelete, MdOutlineDoneOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { myContext } from "../../App";
import { IconContext } from "react-icons/lib";

const AddedTask = () => {
  const {
    taskArray,
    setTaskArray,

    setTask,
    setToggleSubmit,

    setIsEdit,
  } = useContext(myContext);
  const [finished, setFinished] = useState(false);
  const now = new Date();
  const handleDelete = (id) => {
    // console.log("I clicked on Delete Button");
    const newList = taskArray.filter((item) => item.id !== id);
    setTaskArray(newList);
  };

  const handleCompleted = (eachObj) => {
    setFinished(!finished);
    const newArray = taskArray.map((task) => {
      if (task.id === eachObj.id)
        return {
          ...task,
          isCompleted: finished,
        };

      return task;
    });

    setTaskArray(newArray);
  };

  const handleEdit = (eachObjID) => {
    // console.log("I clicked on Edit Button", eachObjID);
    const newArray = taskArray.find((eachTaskObject) => {
      // console.log(eachTaskObject);
      return eachTaskObject.id === eachObjID;
    });
    setToggleSubmit(false);
    setTask(newArray.todo);
    setIsEdit(eachObjID);
  };
  // console.log(taskArray);
  return (
    <>
      <h2 className="taskContainer__date">
        <span>
          {now.getDate()}/{now.getMonth()}/{now.getFullYear()}
        </span>
      </h2>
      {taskArray.map((eachObj, index) => {
        return (
          <div className="container">
            <div className="taskContainer" key={eachObj.id}>
              <h4
                className={
                  eachObj.isCompleted
                    ? "taskContainer__taskName--crossed"
                    : "taskContainer__taskName--none"
                }
              >
                {eachObj.todo}
              </h4>

              <div className="taskContainer__buttons">
                <IconContext.Provider value={{ className: "icons" }}>
                  <FiEdit onClick={() => handleEdit(eachObj.id)} />

                  <MdOutlineDoneOutline
                    onClick={() => handleCompleted(eachObj)}
                  />

                  <MdDelete onClick={() => handleDelete(eachObj.id)} />
                </IconContext.Provider>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AddedTask;

// {
/* <div className="taskContainer">
<h2>{task}</h2>
<div className="taskContainer__buttons">
<IconContext.Provider value={{ className: "icons" }}>
<FiEdit />
<MdOutlineDoneOutline />
<MdDelete />
</IconContext.Provider>
</div>
</div> */
// }
