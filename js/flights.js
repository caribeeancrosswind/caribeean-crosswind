
async function loadFlights() {
const { data, error } = await supabaseClient.from("flights").select("*");
if (error) return console.error(error);

const table = document.getElementById("flightsTable");
data.forEach(flight => {
table.innerHTML += `
<tr>
<td>${flight.flight_number}</td>
<td>${flight.origin}</td>
<td>${flight.destination}</td>
<td>${flight.aircraft}</td>
</tr>
`;
});
}

loadFlights();
