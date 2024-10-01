const signbtn = document.getElementById("sign-btn");
const loginbtn = document.getElementById("login-btn");
const signid = document.getElementById("sign-id");
const signpass = document.getElementById("sign-pass");
const loginid = document.getElementById("login-id");
const loginpass = document.getElementById("login-pass");
const loginfailed = document.getElementById("login-failed");
const loginsuccess = document.getElementById("login-success");

class UserArray {
  constructor() {
    this.length = 0;
    this.users = [];
  }
  UserPush(username, password) {
    this.users.push({ username, password });
    this.length++;
  }
}

// Option 2: Update `newarr` directly (Recommended)
loginbtn.addEventListener("click", () => {
  const users = retrieveArray(); // Fetch users from localStorage
  const user = users.find((user) => user.username === loginid.value);
  console.log(users);
  if (!user) {
    loginfailed.style.display = "block";
    loginsuccess.style.display = "none";
  }
  if (user && user.password === loginpass.value) {
    loginsuccess.style.display = "block";
    loginfailed.style.display = "none";
  } else {
    loginfailed.style.display = "block";
    loginsuccess.style.display = "none";
  }
});

signbtn.addEventListener("click", () => {
  const users = retrieveArray(); // Fetch users from localStorage
  users.push({ username: signid.value, password: signpass.value }); // Add new user directly to retrieved array
  updateArray(users); // Update localStorage with the modified array
});

function updateArray(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function retrieveArray() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users;
}
