import { hotels } from "../data/hotels";
import HotelCard from "../components/HotelCard";

const Home = () => (
  <div className="home">
    <h1>Explore Hotels</h1>
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  </div>
);

export default Home;
