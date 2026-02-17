async function registerPilot() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const simbrief_username = document.getElementById("simbrief_username").value;

  if (!name || !email || !simbrief_username) {
    alert("Completa todos los campos");
    return;
  }

  const { error } = await supabaseClient.from("pilots").insert([
    {
      name: name,
      email: email,
      simbrief_username: simbrief_username
    }
  ]);

  if (error) {
    alert("Error al registrar");
    console.log(error);
  } else {
    alert("Piloto registrado correctamente");
  }
}

async function generateFlight() {
  const email = document.getElementById("login_email").value;

  if (!email) {
    alert("Ingresa tu email registrado");
    return;
  }

  const { data, error } = await supabaseClient
    .from("pilots")
    .select("*")
    .eq("email", email)
    .single();

  if (error || !data) {
    alert("Piloto no encontrado");
    return;
  }

  const simbriefURL =
    `https://www.simbrief.com/system/dispatch.php?orig=SCEL&dest=SABE&type=A320&airline=CCW&fltnum=101&username=${data.simbrief_username}`;

  window.open(simbriefURL, "_blank");
}
