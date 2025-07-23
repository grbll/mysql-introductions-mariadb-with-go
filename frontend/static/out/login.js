export async function login(email) {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error(`Http error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
}
