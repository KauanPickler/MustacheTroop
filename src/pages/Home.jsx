import React from "react";
import Navbar from "../components/NavBar";
import "../index.css";
import Footer from  "../components/Footer"
import T1 from "../assets/trabalhando4.jpeg"
import T2 from "../assets/trabalhando2.jpeg"
import T3 from "../assets/trabalhando3.jpeg"
export default function Home() {
  return (
    <div>
      <Navbar />

      <header id="home" className="pt-20 bg-gradient-to-br from-indigo-500 to-purple-600 text-white min-h-[80vh] flex items-center justify-center text-center">
        <div>
          <h1 className="text-5xl font-bold mb-4">Bem-vindo à Nossa Empresa Mustache Troop</h1>
          <p className="text-xl max-w-2xl mx-auto">A melhor solução para seu banho.</p>
        </div>
      </header>

      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Chuveiro inteligente para seu banho", desc: "Chuveiro com a cara da modernidade." },
              { title: "IA ", desc: "Melhor IA de 2025 eleita pela Harvard." },
              { title: "Banho confortavel e seguro", desc: "Integrado com todas as câmeras da casa." },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Galeria</h2>
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-4 animate-slide">
              {[T1, T2, T3].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full md:w-1/3 rounded-xl shadow-lg "
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
