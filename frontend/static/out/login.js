async function login(email) {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || `Http error! Status: ${response.status}`);
    }

    return result;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
}

export function handleLogin(event) {
  if (event) event.preventDefault();

  const email = document.getElementById("email").value;
  const msg = document.getElementById("message");

  login(email)
    .then((data) => {
      msg.textContent = data.message;
      msg.style.color = "black";
    })
    .catch((err) => {
      msg.textContent = err.message;
      msg.style.color = "red";
    });
}
