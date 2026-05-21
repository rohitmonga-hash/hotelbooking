const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const roomId = document.getElementById("roomId").value;
  const checkIn = document.getElementById("checkIn").value;
  const checkOut = document.getElementById("checkOut").value;

  const nights =
    (new Date(checkOut) - new Date(checkIn)) /
    (1000 * 60 * 60 * 24);

  const totalPrice = nights * 2000;

  const response = await fetch("/api/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      roomId,
      checkIn,
      checkOut,
      totalPrice
    })
  });

  const data = await response.json();

  if (data.success) {
    alert("Booking Successful");
  }
});