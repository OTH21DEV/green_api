export async function handleAuth(credentials) {
  try {
    const response = await fetch("url for check idInstance and apiTokenInstance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        idInstance: credentials.idInstance,
        apiTokenInstance: credentials.apiTokenInstance,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    console.error(err);
  }
}
