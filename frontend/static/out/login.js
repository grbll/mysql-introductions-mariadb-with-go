export function login(email) {
  return fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "email=" + encodeURIComponent(email),
  }).then((response) => response.text());
}
