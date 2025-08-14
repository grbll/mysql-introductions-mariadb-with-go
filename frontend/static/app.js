import { handleLogin } from "./out/login.js";
import { handleRegister } from "./out/register.js";

document.getElementById("loginForm").addEventListener("submit", handleLogin);

document.getElementById("loginButton").addEventListener("click", handleLogin);

document.getElementById("registerButton").addEventListener(
  "click",
  handleRegister,
);
