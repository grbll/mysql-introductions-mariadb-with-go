import { login } from "./out/login.js";

document.getElementById("loginBtn").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  login(name).then(document.getElementById("message").textContent = text);
});
