import { useState, useEffect, use } from "react";
import React from 'react';
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";

function App() {
  const [tasksItems, setTasksItems] = useState([]); //crea un estado llamado tasksItems y una funcion para actualizarlo llamada setTasksItems
  const [showCompleted, setShowCompleted] = useState(false);

  function createNewTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    } else {
      alert("Task already exists");
    }

    //console.log(taskName);
  }

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((t) => (t.name == task.name ? { ...t, done: !t.done } : t))
    ); //cambia el estado de done de la tarea que se le pasa como argumento
  };
  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []); //se llama a la funcion cada vez que el componente se monta y carga las tareas del local storage

  const cleanTasks = () => {
    setTasksItems(tasksItems.filter(task => !task.done))
    setShowCompleted(false)
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]); //se llama ala funcion cada vez que el estado tasksItems cambia y los muestra en el local storage

  return (
    <main className="bg-dark vh-100 text-white">
      <div className="container col-md-4 offset-md-4">
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={tasksItems} toggleTask={toggleTask} />
        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTasks={cleanTasks}
        />
        {showCompleted === true && (
          <TaskTable
            tasks={tasksItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </div>
    </main>
  );
} //Le pasamos la tabla de tareas y la funcion toggleTask a TaskTable
//toggleTask es una funcion que se encarga de cambiar el estado de done de una tarea

export default App;
