import { useState, useEffect, use } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import {TaskTable} from "./components/TaskTable";

function App() {
  const [tasksItems, setTasksItems] = useState([

  ]); //crea un estado llamado tasksItems y una funcion para actualizarlo llamada setTasksItems

  function createNewTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }else{
      alert("Task already exists");
    }

    //console.log(taskName);
  }

  const toggleTask = task =>{
    setTasksItems(
      tasksItems.map(t => t.name == task.name ? {...t, done: !t.done} : t)
  );//cambia el estado de done de la tarea que se le pasa como argumento

  };
useEffect(()=>{
let data = localStorage.getItem('tasks');
if(data){
  setTasksItems(JSON.parse(data));
}
}, [])//se llama ala funcion cada vez que el componente se monta y carga las tareas del local storage

useEffect(()=>{
localStorage.setItem('tasks', JSON.stringify(tasksItems));
}, [tasksItems]) //se llama ala funcion cada vez que el estado tasksItems cambia y los muestra en el local storage

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
<TaskTable tasks={tasksItems} toggleTask={toggleTask}/> 
    
    </div>
  );
}//Le pasamos la tabla de tareas y la funcion toggleTask a TaskTable
//toggleTask es una funcion que se encarga de cambiar el estado de done de una tarea

export default App;
