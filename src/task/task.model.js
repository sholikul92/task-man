class Task {
  #tasks;
  constructor() {
    this.#tasks = this.getTasks() || [];
  }

  saveTask(data) {
    const taskData = {
      id : Date.now(),
      inProgress: true,
      ...data
    }

    this.#tasks.push(taskData)
    localStorage.setItem('tasks', JSON.stringify(this.#tasks))
  }

  getTasks(){
    return JSON.parse(localStorage.getItem("tasks")) || []
  }

  deleteTask(id) {
    const indexTask = this.#tasks.findIndex(task => task.id === id);
    
    if (indexTask !== -1) {
      this.#tasks.splice(indexTask, 1);
      this.updateLocalStorage()
    }
  }

  completedTask(id) {
    const indexTask = this.#tasks.findIndex(task => task.id === id);

    if (indexTask !== -1) {
      this.#tasks[indexTask].inProgress = false;
      this.updateLocalStorage()
    }
  }
  
  updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.#tasks))
  }
}

export const task = new Task()