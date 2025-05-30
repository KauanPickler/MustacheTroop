import React from "react";

export default function Sales() {
  return (
    <div className="pt-24 px-4 bg-gradient-to-br from-indigo-50 to-purple-100 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-6">Conheça o Roberto</h1>
        <p className="text-lg text-gray-700 mb-10">
          Apresentamos nossa mais nova solução para transformar o seu banho. Criado com tecnologia de ponta, fácil de usar e focado em resultados reais.
        </p>
        <div className="bg-white rounded-xl shadow-lg p-6 md:flex items-center gap-6">
          <img src="/produto.jpg" alt="Produto" className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0" />
          <div className="text-left">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Roberto</h2>
            <p className="text-gray-700 mb-4">
            Seu melhor companheiro de banho              
            </p>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>Fácil de usar</li>
              <li>Compatível com dispositivos móveis</li>
              <li>Suporte especializado</li>
            </ul>
            <a href="#" className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition">Quero Saber Mais</a>
          </div>
        </div>
      </div>
    </div>
  );
}