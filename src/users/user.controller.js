import { User } from "./user.model.js";
const user = new User()
const btnRegister = document.getElementById('btn-register');
const btnLogin = document.getElementById('btn-login')

btnRegister?.addEventListener('click', (e) => {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  
  const users = user.getUsers();
    
  const userExist = users.find(user => user.username === username);

  if (username.length === 0) {
    throwErrorMessage("Username tidak boleh kosong!")
  } else {
    if (userExist) {
      throwErrorMessage("Username sudah terdaftar!")
    } else {
      const result = user.saveUser({username})
      if (result.success) {
        window.location.href = "../../pages/login.html"
      }
    }
  }
})

btnLogin?.addEventListener('click', (e) => {
  e.preventDefault();
  
  const username = document.getElementById('username').value;

  const users = user.getUsers();
  const userExists = users.find(user => user.username === username);

  if (username.length === 0) {
    throwErrorMessage("Username tidak boleh kosong!")
  } else {
    if (userExists) {
      localStorage.setItem("userLoggedIn", userExists.username);
      window.location.href = "../../pages/task.html";
    } else {
      throwErrorMessage("Username tidak terdaftar!")
    }
  }
})

const throwErrorMessage = (text) => {
  document.getElementById('username').classList.add('border-red-500');
  document.getElementById('username').classList.replace('focus:outline-blue-500', 'focus:outline-red-500');
  document.getElementById('alert-failed').classList.remove('hidden')
  document.getElementById('alert-failed').textContent = text
}