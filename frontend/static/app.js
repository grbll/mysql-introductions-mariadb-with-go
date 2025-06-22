import { login } from "./out/login.js";

document.getElementById("loginForm").addEventListener(
  "submit",
  function (event) {
    event.preventDefault(); // Prevent the browser from doing a real page reload

    const name = document.getElementById("name").value;

    login(name)
      .then((text) => {
        document.getElementById("message").textContent = text;
      });
  },
);
