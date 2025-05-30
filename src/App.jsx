import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Clientes from "./pages/Clients"
import Team from "./pages/Team"
import Sales from "./pages/Sales"
export default function App() {
  return (
    <>
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/time" element={<Team />} />
          <Route path="/vendas" element={<Sales />} />
        </Routes>
      </div>
    </>
  );
}
