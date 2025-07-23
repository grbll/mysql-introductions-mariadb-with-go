import { login } from "./out/login.js";

document.getElementById("loginForm").addEventListener(
  "submit",
  function (event) {
    event.preventDefault(); // Prevent the browser from doing a real page reload

    const email = document.getElementById("email").value;

    login(email)
      .then((data) => {
        document.getElementById("message").textContent = data.message;
      });
  },
);
