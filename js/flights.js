async function loadFlights() {
  const { data } = await supabaseClient.from("flights").select("*");

  const table = document.querySelector("#flightTable tbody");
  table.innerHTML = "";

  data.forEach(f => {
    table.innerHTML += `
      <tr>
        <td>${f.flight_number}</td>
        <td>${f.origin}</td>
        <td>${f.destination}</td>
        <td>${f.aircraft}</td>
        <td><button onclick="book('${f.flight_number}','${f.origin}','${f.destination}','${f.aircraft}')">Book</button></td>
      </tr>`;
  });
}

async function book(flight, origin, dest, aircraft) {
  const { data } = await supabaseClient.from("pilots").select("simbrief_username").limit(1).single();

  const url = `https://www.simbrief.com/system/dispatch.php?orig=${origin}&dest=${dest}&type=${aircraft}&fltnum=${flight}&airline=CCW&username=${data.simbrief_username}`;
  window.open(url, "_blank");
}

loadFlights();
