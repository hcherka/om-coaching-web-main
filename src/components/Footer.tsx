
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <div className="mb-4">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-serif font-bold text-coaching-300">OM</span>
                <span className="ml-2 text-2xl font-serif text-gray-300">Coaching</span>
              </Link>
            </div>
            <p className="text-gray-400 mb-6">
              Accompagnement personnalisé pour particuliers et entreprises. 
              Développez votre potentiel professionnel et personnel avec nos coachs certifiés.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-coaching-300 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-coaching-300 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-coaching-300 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-coaching-300 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-coaching-300 transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-coaching-300 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-coaching-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-coaching-300 flex-shrink-0 mt-1" />
                <span className="text-gray-400">Paris, France</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-coaching-300 flex-shrink-0" />
                <span className="text-gray-400">+33 (0)1 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-coaching-300 flex-shrink-0" />
                <a href="mailto:contact@om-coaching.com" className="text-gray-400 hover:text-coaching-300 transition-colors">
                  contact@om-coaching.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} OM Coaching. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
