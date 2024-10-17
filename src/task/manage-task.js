import { task as instanceTask } from "./task.model.js";
// import { deleteTask } from "./delete-task.js";
document.addEventListener('DOMContentLoaded', () => {

  let taskExist = instanceTask.getTasks();
  
  const taskWrapper = document.querySelector('section#task-wrapper');
  const taskWrapperEmpty = document.querySelector('section#task-wrapper-empty');
  
  const renderPage = (tasks = taskExist) => {
    if (tasks.length === 0){
      taskWrapperEmpty.classList.remove('hidden');
      taskWrapper.classList.add('hidden');
    } else {
      taskWrapper.innerHTML = '';
      taskWrapper.classList.remove('hidden');
      tasks.forEach(task => {
        const itemTask = document.createElement('section');
        itemTask.innerHTML = 
        `
        <div class="bg-white p-4 rounded-2xl flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-semibold">${task.taskName}</h2>
            <p>Deadline : ${task.dateDeadline}</p>
            <div class="flex gap-4 mt-4">
              <div class="flex gap-1">
                <img src="../public/img/high-level.svg" alt="high-level" class="w-6">
                <p>${task.priorityLevel}</p>
              </div>
              ${task.inProgress?
                `<div class="flex gap-1">
                  <img src="../public/img/in-progress.svg" alt="in-progress" class="w-4">
                  <p>In Progres</p>
                </div>`
                : 
                `<div class="flex gap-1">
                  <img src="../public/img/completed-task.svg" alt="in-progress" class="w-5">
                  <p>Finished</p>
                </div>`
              } 
            </div>
          </div>
          <div class="flex gap-4">
              <button class="btn-delete border border-red-600 text-red-600 py-1 px-4 rounded-full" id="btn-delete-${task.id}">Delete</button>
              <button class="bg-gradient-to-b from-blue-500 to-[#2847F9] text-white py-1 px-4 rounded-full" id="completed-task-${task.id}">Complete</button>
          </div>
        </div>
        `
  
        taskWrapper.append(itemTask);
  
        itemTask.querySelector(`button#btn-delete-${task.id}`).addEventListener('click', (e) => {
          e.preventDefault();
      
          instanceTask.deleteTask(task.id);
          const tasksUpdate = instanceTask.getTasks();
          renderPage(tasksUpdate);
        })

        itemTask.querySelector(`button#completed-task-${task.id}`).addEventListener('click', (e) => {
          e.preventDefault();

          instanceTask.completedTask(task.id);
          const tasksUpdate = instanceTask.getTasks();
          renderPage(tasksUpdate);
        })
      })
    }
  }
  
  renderPage();
})