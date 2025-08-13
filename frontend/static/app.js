import { login } from "./out/login.js";

document.getElementById("loginForm").addEventListener(
  "submit",
  () => {
    event.preventDefault(); // Prevent the browser from doing a real page reload

    const email = document.getElementById("email").value;
    const msg = document.getElementById("message");

    login(email)
      .then((data) => {
        msg.textContent = data.message;
        msg.style.color = black;
      })
      .catch((err) => {
        msg.textContent = err.message;
        msg.style.color = red;
      });
  },
);

document.getElementById("loginButton").addEventListener(
  "click",
  () => {
    const email = document.getElementById("email").value;
    login(email)
      .then((data) => {
        document.getElementById("message").textContent = data.message;
      });
  },
);
