import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Mustache Troop</h3>
          <p className="text-gray-400">Soluções em tecnologia, design e desenvolvimento.</p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="text-gray-400 hover:text-white">Início</a></li>
            <li><a href="#services" className="text-gray-400 hover:text-white">Serviços</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white">Contato</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contato</h3>
          <p className="text-gray-400">Email: mustachetroop@mustachetroop.com.br</p>
          <p className="text-gray-400">WhatsApp: (47) 99273-7118</p>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8 text-sm">
        © 2025 Nossa Empresa. Todos os direitos reservados mustache troop.
      </div>
    </footer>
  );
}
