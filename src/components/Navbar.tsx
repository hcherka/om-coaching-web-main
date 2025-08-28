import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "@/components/Logo.tsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // menu mobile
  const [isServicesOpen, setIsServicesOpen] = useState(false); // dropdown services mobile

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  return (
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center" onClick={closeMenu}>
              <span className="text-2xl font-serif font-bold text-coaching-600 flex items-center">
                <img src={`${import.meta.env.BASE_URL}faviconNoText.png`} alt="Logo" className="h-10 w-12 " />
              </span>
                <span className="text-2xl font-serif text-gray-700 pt-2">Coaching</span>
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:space-x-10">
              <Link to="/" className="animated-underline text-gray-700 hover:text-coaching-600 font-medium">Accueil</Link>
              <Link to="/about" className="animated-underline text-gray-700 hover:text-coaching-600 font-medium">À Propos</Link>

              {/* Services dropdown desktop */}
              <div className="relative inline-block text-left">
                <button
                    onClick={toggleServices}
                    className="animated-underline text-gray-700 hover:text-coaching-600 font-medium px-4 py-2 focus:outline-none"
                >
                  Services
                </button>
                {isServicesOpen && (
                    <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                      <div className="py-1 flex flex-col">
                        <Link to="/coaching-scolaire" className="block px-4 py-2 text-gray-700 hover:bg-coaching-50 hover:text-coaching-600" onClick={() => setIsServicesOpen(false)}>Coaching scolaire & étudiant</Link>
                        <Link to="/coaching-jeunes" className="block px-4 py-2 text-gray-700 hover:bg-coaching-50 hover:text-coaching-600" onClick={() => setIsServicesOpen(false)}>Coaching jeunes & jeunes adultes</Link>
                        <Link to="/coaching-neurofeedback" className="block px-4 py-2 text-gray-700 hover:bg-coaching-50 hover:text-coaching-600" onClick={() => setIsServicesOpen(false)}>Coaching & Neurofeedback</Link>
                        <Link to="/coaching-equipe" className="block px-4 py-2 text-gray-700 hover:bg-coaching-50 hover:text-coaching-600" onClick={() => setIsServicesOpen(false)}>Coaching d’équipe</Link>
                      </div>
                    </div>
                )}
              </div>

              <Link to="/contact" className="animated-underline text-gray-700 hover:text-coaching-600 font-medium">Contact</Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-coaching-600 focus:outline-none">
                <span className="sr-only">Ouvrir le menu</span>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={cn("md:hidden bg-white transition-all duration-300 ease-in-out", isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden")}>
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-coaching-600 hover:bg-coaching-50" onClick={closeMenu}>Accueil</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-coaching-600 hover:bg-coaching-50" onClick={closeMenu}>À Propos</Link>

            {/* Services dropdown mobile */}
            <button onClick={toggleServices} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-coaching-600 hover:bg-coaching-50">
              Services
            </button>
            {isServicesOpen && (
                <div className="pl-4 flex flex-col space-y-1">
                  <Link to="/coaching-scolaire" className="block px-3 py-2 text-gray-700 hover:text-coaching-600 hover:bg-coaching-50" onClick={() => { closeMenu(); setIsServicesOpen(false); }}>Coaching scolaire & étudiant</Link>
                  <Link to="/coaching-jeunes" className="block px-3 py-2 text-gray-700 hover:text-coaching-600 hover:bg-coaching-50" onClick={() => { closeMenu(); setIsServicesOpen(false); }}>Coaching jeunes & jeunes adultes</Link>
                  <Link to="/coaching-neurofeedback" className="block px-3 py-2 text-gray-700 hover:text-coaching-600 hover:bg-coaching-50" onClick={() => { closeMenu(); setIsServicesOpen(false); }}>Coaching & Neurofeedback</Link>
                  <Link to="/coaching-equipe" className="block px-3 py-2 text-gray-700 hover:text-coaching-600 hover:bg-coaching-50" onClick={() => { closeMenu(); setIsServicesOpen(false); }}>Coaching d’équipe</Link>
                </div>
            )}

            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-coaching-600 hover:bg-coaching-50" onClick={closeMenu}>Contact</Link>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
