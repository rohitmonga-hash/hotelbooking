async function loadRooms() {
  const response = await fetch("/api/rooms");
  const rooms = await response.json();

  const roomContainer = document.getElementById("rooms");

  rooms.forEach(room => {
    roomContainer.innerHTML += `
      <div class="room-card">
        <img src="${room.image}" width="100%">
        <h2>${room.title}</h2>
        <p>₹${room.price}</p>
        <p>${room.description}</p>

        <a href="booking.html">
          <button>Book Now</button>
        </a>
      </div>
    `;
  });
}

loadRooms();