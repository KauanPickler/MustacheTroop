import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import Team from "./pages/Team";
import Sales from "./pages/Sales";

export default function App() {
  return (
    <Router basename="MustacheTroop">
      <div className="pt-20">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/time" element={<Team />} />
          <Route path="/vendas" element={<Sales />} />
          <Route path="/vendas" element={<Sales />} />
        </Routes>
      </div>
    </Router>
  );
}
