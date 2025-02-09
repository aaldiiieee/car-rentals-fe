import { BrowserRouter as Router, Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import ListCarsPage from "./pages/ListCarsPage";
import DetailCarPage from "./pages/DetailCarPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/daftar-mobil" element={<ListCarsPage />} />
        <Route path="/detail-mobil/:manufacture/:model/:uuid" element={<DetailCarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
