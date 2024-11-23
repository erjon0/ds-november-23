// app.js
async function fetchFlightData() {
    const apiKey = 'YOUR_ACCESS_KEY';
    const response = await fetch(`https://www.goflightlabs.com/flights?access_key=${apiKey}&limit=10&airlineIata=AA`);
    const data = await response.json();
    displayFlightData(data.data);
}

function displayFlightData(flights) {
    const flightList = document.getElementById('flightList');
    flightList.innerHTML = '';
    flights.forEach(flight => {
        const listItem = document.createElement('li');
        listItem.textContent = `${flight.departure.airport} to ${flight.arrival.airport} - ${flight.airline.name}`;
        flightList.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', fetchFlightData);
