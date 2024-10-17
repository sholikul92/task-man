import { task } from "./task.model.js";
const formAddTask = document.getElementById('form-add-task');

formAddTask?.addEventListener('submit', (e) => {
  e.preventDefault();

  const taskName = document.getElementById('task-name').value;
  const priorityLevel = document.getElementById('priority-level').value;
  const dateDeadline = document.getElementById('date-deadline').value;
  
  const newTask = {
    taskName,
    priorityLevel,
    dateDeadline
  }

  task.saveTask(newTask)
  
  window.location.href = "../../pages/task.html"
})