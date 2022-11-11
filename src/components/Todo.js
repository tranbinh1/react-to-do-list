import React, { useState } from "react";


export default function Todo({ todo, onCheckBtnClick, onDeleteBtnClick, onEditBtnClick }) {
  const [taskName, setTaskName] = useState(todo.name)


  function handleTaskInputChange(e) {
    setTaskName(e.target.value)
  }

  function handleEditClick() {
    onEditBtnClick(todo.id, taskName)
  }

  return (
    <>
      <div className="wrapper">
        <input className={todo.isCompleted ? 'completed input' : 'input'} value={taskName} onChange={handleTaskInputChange} />
        <button className="button-1" onClick={() => onCheckBtnClick(todo.id)}>Check</button>
        <button className="button-1" onClick={() => onDeleteBtnClick(todo.id)}>Delete</button>
        <button className="button-1" onClick={handleEditClick}>Edit</button>
      </div>
    </>
  );
}