import { Link } from "react-router-dom";

const HotelCard = ({ hotel }) => (
  <div className="hotel-card">
    <img src={hotel.image} alt={hotel.name} />
    <h3>{hotel.name}</h3>
    <p>{hotel.location}</p>
    <p>{hotel.description}</p>
    <p> ₹ {hotel.price} / night</p>
    <Link to="/booking">
      <button>Book Now</button>
    </Link>
  </div>
);

export default HotelCard;
