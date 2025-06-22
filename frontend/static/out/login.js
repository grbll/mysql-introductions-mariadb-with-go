export function login(name) {
  return fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "name=" + encodeURIComponent(name),
  }).then((response) => response.text());
}
