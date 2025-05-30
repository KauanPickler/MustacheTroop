import React from "react";
import bryan from "../assets/membro1.jpg"
import otto from "../assets/membro2.jpg"
import joao from "../assets/membro4.jpeg"
import kauan from "../assets/membro3.jpg"
import Navbar from "../components/NavBar"

export default function Team() {
  const team = [
    { name: "Picles", role: "Programador do roberto", photo: kauan, story: "Melhor programador do mundo, e melhor jogador de fortnite" },
    { name: "Bagatim", role: "Profissional na arte da labia", photo: bryan, story: "Joga em um x merda, tem 5% da vida no ark" },
    { name: "Pifio", role: "Maior sargento do exercito", photo: otto, story: "Começou a servir desde os 5 anos de idade no exercito" },
    { name: "Champa", role: "Grão mestre no LOL", photo: joao, story: "Irmão quase gêmeo do faker" },
  ];

  return (
     <div><Navbar />
    <div >
      
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-12">Nossa História</h1>
        <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
          4 Amigos de free fire,juntos em uma jornada empresarial em busca do melhor conforto para seu banho.
        </p>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-ld hover:shadow-xl transition-all text-center">
              <img src={member.photo} alt={member.name} className="h-32 w-32 mx-auto rounded-full object-cover mb-4" />
              <h3 className="text-xl font-semibold text-indigo-700 mb-1">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{member.role}</p>
              <p className="text-gray-700 text-sm">{member.story}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}