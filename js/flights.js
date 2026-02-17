
async function loadFlights() {
const { data: flights } = await supabaseClient.from("flights").select("*");
const { data: userData } = await supabaseClient.auth.getUser();

const pilotId = userData.user.id;

const { data: pilot } = await supabaseClient
.from("pilots")
.select("simbrief_username")
.eq("id", pilotId)
.single();

const table = document.getElementById("flightsTable");

flights.forEach(f => {
table.innerHTML += `
<tr>
<td>${f.flight_number}</td>
<td>${f.origin}</td>
<td>${f.destination}</td>
<td>${f.aircraft}</td>
<td>
<form action="https://www.simbrief.com/system/dispatch.php" method="POST" target="_blank">
<input type="hidden" name="orig" value="${f.origin}">
<input type="hidden" name="dest" value="${f.destination}">
<input type="hidden" name="type" value="${f.aircraft}">
<input type="hidden" name="airline" value="CCW">
<input type="hidden" name="fltnum" value="${f.flight_number}">
<input type="hidden" name="username" value="${pilot.simbrief_username}">
<button class="btn btn-primary btn-sm">Generar</button>
</form>
</td>
</tr>`;
});
}

loadFlights();
