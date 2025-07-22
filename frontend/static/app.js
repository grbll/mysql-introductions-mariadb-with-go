console.log("app.js is loaded");
import { login } from "./out/login.js";

console.log("importet login module");

document.getElementById("loginForm").addEventListener(
  "submit",
  function (event) {
    event.preventDefault(); // Prevent the browser from doing a real page reload
    console.log("event submitted");

    const email = document.getElementById("email").value;

    login(email)
      .then((text) => {
        console.log("response from backend: ", text);
        document.getElementById("message").textContent = text;
      });
  },
);
