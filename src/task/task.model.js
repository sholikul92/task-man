class Task {
  #tasks;
  constructor() {
    this.#tasks = getTasks();
  }

  saveTask(data) {
    const taskData = {
      id : Date.now,
      ...data
    }
  }

  getTasks(){
    return localStorage.getItem("tasks")
  }
}