import { useState } from "react"; //importa useState de react
import React from 'react'; //importa React en versiones anteriores

export const TaskCreator = ({ createNewTask }) => {
  //crea un componente llamado TaskCreator que recibe las props
  const [newTaskName, setNewTaskName] = useState([]); //crea un estado llamado newTaskName y una funcion para actualizarlo llamada setNewTaskName

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName); //ejecuta la funcion createNewTask que viene en las props de TaskCreator

    setNewTaskName(""); //resetea el valor de newTaskName
  };
  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-9">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTaskName} //el valor del input es igual al estado newTaskName
          onChange={(e) => setNewTaskName(e.target.value)} // esta funcion se ejecuta cada vez que el usuario escribe en el input y actualiza el estado de newTaskName
          className="form-control"
        />
      </div>

      <div className="col-3">
        <button className="btn btn-primary btn-sm">Save Task</button>
      </div>
    </form>
  );
};
