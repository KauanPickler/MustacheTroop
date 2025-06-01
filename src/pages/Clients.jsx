import React, { useState } from "react";
import C1 from "../assets/cliente.jpeg";
import C2 from "../assets/cliente2.jpeg";
import C3 from "../assets/cliente3.jpeg";
import C4 from "../assets/cliente4.jpeg";
import C5 from "../assets/cliente5.jpeg";
import C6 from "../assets/cliente6.jpeg";
import C7 from "../assets/cliente7.png";
import C8 from "../assets/cliente8.jpg";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
export default function Clients() {
  const clients = [
    { name: "Breakman", logo: C1 },
    { name: "Sweetie Fox", logo: C4 },
    { name: "Alanzoka", logo: C6 },
    { name: "Veio da Havan", logo: C2 },
    { name: "Logan Paul", logo: C5 },
    { name: "Neymar", logo: C3 },
    { name: "Shaq", logo: C7 },
     { name: "MrBeast", logo: C8 },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const prevClient = () => setSelectedIndex((prev) => (prev - 1 + clients.length) % clients.length);
  const nextClient = () => setSelectedIndex((prev) => (prev + 1) % clients.length);

  return (
    <div>
      <Navbar />
      
      <div className="max-w-7xl mx-auto text-center">

        <h1 className="text-4xl font-bold text-indigo-700 mb-10">Nossos Clientes</h1>
        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all flex flex-col items-center cursor-pointer"
              style={{ minHeight: '400px', minWidth: '300px' }}
              onClick={() => openModal(idx)}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-48 w-48 object-contain mb-6"
              />
              <p className="text-2xl text-gray-800 font-bold text-center">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative bg-white rounded-2xl p-6 max-w-lg w-full text-center">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl font-bold"
            >
              &times;
            </button>
            <img
              src={clients[selectedIndex].logo}
              alt={clients[selectedIndex].name}
              className="w-full h-[400px] object-contain mb-4"
            />
            <p className="text-2xl font-semibold">{clients[selectedIndex].name}</p>

            <div className="flex justify-between mt-4">
              <button
                onClick={prevClient}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                ← Anterior
              </button>
              <button
                onClick={nextClient}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Próximo →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
