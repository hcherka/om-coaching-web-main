
import { Link } from "react-router-dom";

interface CTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const CTA = ({ title, subtitle, buttonText, buttonLink }: CTAProps) => {
  return (
    <section className="bg-coaching-600 text-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{title}</h2>
          <p className="text-lg text-coaching-100 mb-8">{subtitle}</p>
          <Link 
            to={buttonLink} 
            className="bg-white text-coaching-600 hover:bg-coaching-50 font-medium rounded-md px-6 py-3 transition-colors duration-300 inline-block"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
