import React, { useContext, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { myContext } from "../../App";
import "./InputBox.css";

const InputBox = () => {
  const {
    taskArray,
    setTaskArray,
    task,
    setTask,
    setToggleSubmit,
    toggleSubmit,
    isEdit,
    setIsEdit,
  } = useContext(myContext);
  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
    <form onSubmit={handleSubmit}>
      <div className=" input">
        <input
          className="input__searchBar"
          placeholder="I wish to..."
          value={task}
          onChange={handleChange}
        />
        {toggleSubmit ? (
          <button
            className="input__button"
            onClick={handleButton}
            type="submit"
          >
            +
          </button>
        ) : (
          <button className="input__button" onClick={handleButton}>
            <FiEdit />
          </button>
        )}
      </div>
    </form>
  );
};

export default InputBox;
