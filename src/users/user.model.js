class User {
  constructor() {
    this.users = this.getUsers() || [];
  }

  saveUser(data) {
    const userData = {
      id : Date.now(),
      ...data,
    }

    this.users.push(userData);
    localStorage.setItem('users', JSON.stringify(this.users));

    return {
      success : true
    }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
  }

}
