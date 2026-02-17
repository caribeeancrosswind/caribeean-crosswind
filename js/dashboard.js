async function loadUser() {
  const { data } = await supabaseClient.auth.getUser();
  if (!data.user) window.location.href="login.html";
  document.getElementById("welcome").innerText = "Welcome " + data.user.email;
}
loadUser();
