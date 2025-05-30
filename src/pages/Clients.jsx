import React from "react";
import C1 from "../assets/cliente.jpeg";
import C2 from "../assets/cliente2.jpeg";
import C3 from "../assets/cliente3.jpeg";
import C4 from "../assets/cliente4.jpeg";
import C5 from "../assets/cliente5.jpeg";
import C6 from "../assets/cliente6.jpeg";
import C7 from "../assets/cliente7.png";

export default function Clients() {
  const clients = [
    { name: "Breakman", logo: C1 },
    { name: "Sweetie Fox", logo: C4 },
    { name: "Alanzoka", logo: C6 },
    { name: "Veio da Havan", logo: C2 },
    { name: "Logan Paul", logo: C5 },
    { name: "Neymar", logo: C3 },
    { name: "Shaq", logo: C7 },
  ];

  return (
    <div className="pt-24 px-4 bg-gradient-to-br from-indigo-50 to-purple-100 min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-10">Nossos Clientes</h1>
        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all flex flex-col items-center w-full h-full"
              style={{ minHeight: '400px', minWidth: '300px' }}
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
    </div>
  );
}
