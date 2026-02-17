async function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const simbrief = document.getElementById("simbrief").value;

  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password
  });

  if (error) {
    alert(error.message);
    return;
  }

  await supabaseClient.from("pilots").insert([
    {
      id: data.user.id,
      name: name,
      simbrief_username: simbrief
    }
  ]);

  alert("Cuenta creada correctamente.");
  window.location.href = "login.html";
}

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    alert(error.message);
    return;
  }

  if (data.session) {
    window.location.href = "index.html";
  }
}
