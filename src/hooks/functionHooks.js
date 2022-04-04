
function login(username, password) {
  console.log(username);
  console.log(password);

  fetch("https://k4backend.osuka.dev/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, password: password }),
  })
    .then((res) => res.json())
    .then((json) => setUser(json));

    return login;   
}


