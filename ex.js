const pop_up = document.getElementById("pop-up");
const login = document.getElementById("login");
const welcome = document.getElementById("welcome");
const admin = document.getElementById("admin");
const signup = document.getElementById("signup");
// const cross = document.getElementById("cross");
function showPopup(name) {
  pop_up.innerHTML = "";
  const new_item = document.createElement("div");
  new_item.classList.add("content-popup");
  new_item.innerHTML = `
     <p id="welcome">Welcome to ${name} Page</p>
        <div class="name">
          <input
            type="text"
            id="username${name}"
            class="username"
            placeholder="Enter your ID name"
            autocomplete="off"
          />
          <i class="fa fa-user btn-user"></i>
          <p id="error-username${name}" class="error-username">Username not valid</p>
        </div>
        <div class="pass">
          <input
            type="password"
            id="password${name}"
            class="password"
            placeholder="Enter your password"
          />
          <i class="fa fa-eye btn-password"></i>
          <p id="error-password${name}" class="error-password">Password Incorrect</p>
        </div>
        <button id="submit">
          Submit <i class="fa fa-paper-plane btn-submit${name}"></i>
        </button>
        <div id="cross"><i class="fa fa-times cross"></i></div>
  `;
  pop_up.appendChild(new_item);
  const cross = document.getElementById("cross");
  cross.addEventListener("click", () => {
    pop_up.style.display = "none";
    new_login.remove(); // Remove the popup from DOM
  });

  const submit = document.getElementById("submit");
  const error_username = document.getElementById(`error-username${name}`);
  const error_password = document.getElementById(`error-password${name}`);
  submit.addEventListener("click", () => {
    if (document.getElementById(`username${name}`).value == "") {
      error_username.style.display = "block";
    } else {
      error_username.style.display = "none";
    }
    if (document.getElementById(`password${name}`).value == "") {
      error_password.style.display = "block";
    } else {
      error_password.style.display = "none";
    }
    if (
      error_username.style.display == "none" &&
      error_password.style.display == "none"
    ) {
    }
  });
}
mu;
login.addEventListener("click", () => showPopup("login"));
signup.addEventListener("click", () => showPopup("signup"));
admin.addEventListener("click", () => showPopup("admin"));
