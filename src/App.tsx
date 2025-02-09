import { BrowserRouter as Router, Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import ListCarsPage from "./pages/ListCarsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/daftar-mobil" element={<ListCarsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
