import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import "./InputBox.css";

const InputBox = ({
  task,
  setTask,
  taskArray,
  setTaskArray,
  completed,
  toggleSubmit,
  setToggleSubmit,
  isEdit,
  setIsEdit,
}) => {
  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleButton = () => {
    if (task === "") {
      alert("Please Enter a task");
    } else if (task && !toggleSubmit) {
      setTaskArray(
        taskArray.map((eachTaskObj) => {
          if (eachTaskObj.id === isEdit) {
            return { ...eachTaskObj, todo: task };
          }
          return eachTaskObj;
        })
      );
      setToggleSubmit(true);

      setTask("");

      setIsEdit(null);
    } else {
      setTaskArray((oldArray) => {
        return [
          ...oldArray,
          {
            id: taskArray.length + 1,
            todo: task,
            isCompleted: false,
          },
        ];
      });
      setTask("");
    }
  };

  return (
    <div className=" input">
      <input
        className="input__searchBar"
        placeholder="I wish to..."
        value={task}
        onChange={handleChange}
      />
      {toggleSubmit ? (
        <button className="input__button" onClick={handleButton}>
          +
        </button>
      ) : (
        <button className="input__button" onClick={handleButton}>
          <FiEdit />
        </button>
      )}
    </div>
  );
};

export default InputBox;
