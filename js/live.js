
async function loadLive() {
const yesterday = new Date();
yesterday.setHours(yesterday.getHours() - 24);

const { data } = await supabaseClient
.from("pireps")
.select("*")
.gte("created_at", yesterday.toISOString());

const container = document.getElementById("liveFlights");

if (!data || data.length === 0) {
container.innerHTML = "<p>No hay vuelos registrados en las últimas 24 horas.</p>";
return;
}

data.forEach(p => {
container.innerHTML += `
<div class="card bg-secondary text-white p-3 mb-2">
Vuelo ${p.flight_number} - ${p.origin} → ${p.destination}
<br>Piloto: ${p.pilot_name}
</div>`;
});
}

loadLive();
