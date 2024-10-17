import { task } from "./task.model.js";
const formAddTask = document.getElementById('form-add-task');

formAddTask?.addEventListener('submit', (e) => {
  e.preventDefault();

  const taskName = document.getElementById('task-name');
  const priorityLevel = document.getElementById('priority-level');
  const dateDeadline = document.getElementById('date-deadline');

  switch(true) {
    case taskName.value === '':
      taskName.classList.add('border-red-500');
      return
    case priorityLevel.value === '':
      priorityLevel.classList.add('border-red-500');
      return
    case dateDeadline.value === '':
      dateDeadline.classList.add('border-red-500');
      return
  }
  
  const newTask = {
    taskName : taskName.value,
    priorityLevel : priorityLevel.value,
    dateDeadline : dateDeadline.value
  }

  if(taskName.value !== '' && priorityLevel.value !== '' && dateDeadline.value !== ''){
    task.saveTask(newTask)
    window.location.href = "../../pages/task.html"
  }   
})