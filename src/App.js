import { useState } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";

function App() {
  const [tasksItems, setTasksItems] = useState([
    { name: "mi primera tarea", done: false },
    { name: "mi segunda tarea", done: false },
    { name: "mi tercera tarea", done: false },
  ]); //crea un estado llamado tasksItems y una funcion para actualizarlo llamada setTasksItems

  function createNewTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }else{
      alert("Task already exists");
    }

    //console.log(taskName);
  }

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />

      <table>
        <thead>
          <tr>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasksItems.map((task) => (
            <tr key={task.name}>
              <td>{task.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
