
async function register() {
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const simbrief = document.getElementById("simbrief").value;

const { data, error } = await supabaseClient.auth.signUp({ email, password });
if (error) return alert(error.message);

await supabaseClient.from("pilots").insert([
{ id: data.user.id, name, simbrief_username: simbrief }
]);

alert("Revisa tu correo para confirmar.");
window.location.href = "login.html";
}

async function login() {
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
if (error) return alert(error.message);

window.location.href = "index.html";
}
