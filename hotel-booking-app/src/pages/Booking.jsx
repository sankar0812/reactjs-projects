const Booking = () => (
  <div className="booking">
    <h1>Booking Page</h1>
    <form className="booking-form">
      <label>
        Name:
        <input type="text" placeholder="Your Name" />
      </label>
      <label>
        Check-in Date:
        <input type="date" />
      </label>
      <label>
        Check-out Date:
        <input type="date" />
      </label>
      <label>
        Guests:
        <input type="number" min="1" />
      </label>
      <button type="submit">Confirm Booking</button>
    </form>
  </div>
);

export default Booking;
