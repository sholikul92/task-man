import { User } from "../users/user.model.js";

const user = new User();

const userLogedIn = user.getUsers()

if(userLogedIn.length === 0) {
  window.location.href = "../../pages/login.html"
}

const username = userLogedIn[0].username;

const usernameTag = document.getElementById('username');
usernameTag.innerText = username;