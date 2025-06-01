import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img src={Logo} alt="Logo" className="h-10 rounded-x1" />
                    </div>

                    {/* Botão hamburguer */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-gray-700 hover:text-indigo-600 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Links de navegação */}
                    <div className="hidden md:flex space-x-4">
                        <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium" onClick={() => window.location.href = '/MustacheTroop/'}>Home</Link>
                        <Link to="/clientes" className="text-gray-700 hover:text-indigo-600 font-medium" onClick={() => window.location.href = '/MustacheTroop/Clientes'}>Clientes</Link>
                        <Link to="/time" className="text-gray-700 hover:text-indigo-600 font-medium" onClick={() => window.location.href = '/MustacheTroop/Time'}>Time</Link>
                         <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium" onClick={() => window.location.href = '/MustacheTroop/Contato'}>Serviços</Link>

                    </div>
                </div>

                {/* Menu mobile */}
                {menuOpen && (
                    <div className="md:hidden mt-2 space-y-2">
                        <a href="#home" className="block text-gray-700 hover:text-indigo-600 font-medium">Home</a>
                        <a href="#services" className="block text-gray-700 hover:text-indigo-600 font-medium">Serviços</a>
                        <a href="#contact" className="block text-gray-700 hover:text-indigo-600 font-medium">Contato</a>
                    </div>
                )}
            </div>
        </nav>
    );
}
