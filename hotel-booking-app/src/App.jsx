
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
