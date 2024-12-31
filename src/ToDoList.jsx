import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Work the dog"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {}

  function deleteTask(index) {}

  function moveTaskUp(index) {}

  function moveTaskDown(index) {}

  return (
    <div className="to-do-list">
      <div>
        <h1>To-Do-List</h1>
        <input
          type="text"
          placeholder="Enter a task ..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => 
        <li key={index}>
          <span className="text">{task}</span>
          <button className="delete-button" onClick={() => deleteTask(index)}>
            Delete ❌           
          </button>
          <button className="move-button" onClick={() => moveTaskUp(index)}>
            Up☝🏼            
          </button>
          <button className="move-button" onClick={() => moveTaskDown(index)}>
            Down 👇🏼            
          </button>
        </li>
        )}
      </ol>

    </div>
  );
}

export default ToDoList;
