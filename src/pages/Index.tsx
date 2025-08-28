
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceCard from "@/components/ServiceCard";
import SectionTitle from "@/components/SectionTitle";
import CTA from "@/components/CTA";
import { Award, Briefcase, HeartHandshake, LightbulbIcon, Target, UserPlus } from "lucide-react";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-coaching-600 to-coaching-700 text-white py-24 md:py-32">
            <div className="section-container flex flex-col lg:flex-row items-center">
                <div className="max-w-2xl flex-1">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight animate-fade-in">
                        Révélez votre potentiel avec OM Coaching
                    </h1>
                    <p className="text-lg md:text-xl text-coaching-100 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        Coaching personnalisé pour particuliers et professionnels.
                        Transformez vos défis en opportunités et atteignez vos objectifs.
                    </p>
                    <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                        <Link to="/contact" className="bg-white text-coaching-600 hover:bg-coaching-50 rounded-md px-6 py-3 font-medium transition-colors duration-300">
                            Prendre rendez-vous
                        </Link>
                        <a href="#ServiceOverview"  className="bg-transparent border border-white text-white hover:bg-white/10 rounded-md px-6 py-3 font-medium transition-colors duration-300">
                            Découvrir nos services
                        </a>
                    </div>
                </div>
                <div className="flex-1 w-full mt-8 lg:mt-0 lg:flex justify-end">
                    <img
                        src="/imgHeroicon.png"
                        alt="Coaching illustration"
                        className="w-full h-full rounded-lg  object-cover"
                    />
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>


        {/* Services Overview */}
        <section id="ServiceOverview" className="py-20 bg-white">
            <div className="section-container">
                <SectionTitle
                    title="Nos services de coaching"
                    subtitle="Nous offrons un accompagnement personnalisé pour répondre à vos besoins spécifiques, que vous soyez un particulier ou une entreprise."
                    center
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard
                        title="Coaching scolaire & étudiant"
                        description="Soutien, méthodologie et orientation pour réussir sa scolarité ou ses études."
                        icon={Award}
                        linkBox="./coaching-scolaire"
                    >
                    </ServiceCard>

                    <ServiceCard
                        title="Coaching jeunes & jeunes adultes"
                        description="Accompagnement lors des choix d’orientation, insertion pro, confiance et construction du projet de vie."
                        icon={LightbulbIcon}
                        linkBox="./coaching-jeunes"
                    >
                    </ServiceCard>

                    <ServiceCard
                        title="Coaching & Neurofeedback"
                        description="Amélioration des capacités cognitives, gestion du stress et du mental grâce au neurofeedback."
                        icon={Target}
                        linkBox="./coaching-neurofeedback"
                    >
                    </ServiceCard>

                    <ServiceCard
                        title="Coaching d'équipe"
                        description="Développez la cohésion, la performance et l’intelligence collective de votre équipe."
                        icon={UserPlus}
                        linkBox="./coaching-equipe"
                    >
                    </ServiceCard>
                </div>
            </div>
        </section>


        {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Pourquoi choisir OM Coaching ?"
                subtitle="Notre approche unique combine expertise, personnalisation et résultats concrets pour votre développement personnel et professionnel."
              />
              
              <ul className="space-y-6">
                <li className="flex">
                  <div className="mr-4 text-coaching-500">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Coachs certifiés</h3>
                    <p className="text-gray-600">Notre équipe est composée de coachs certifiés avec une solide expérience dans divers domaines professionnels.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 text-coaching-500">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Approche sur mesure</h3>
                    <p className="text-gray-600">Chaque programme de coaching est personnalisé pour répondre précisément à vos besoins et objectifs spécifiques.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 text-coaching-500">
                    <LightbulbIcon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Méthodes éprouvées</h3>
                    <p className="text-gray-600">Nos techniques de coaching sont basées sur des approches scientifiques et des méthodes qui ont fait leurs preuves.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="bg-coaching-500 w-full h-full absolute -bottom-4 -right-4 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Coaching de groupe" 
                className="rounded-lg shadow-xl relative z-10 w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <SectionTitle 
            title="Ce que nos clients disent"
            subtitle="Découvrez les témoignages de personnes et d'entreprises qui ont transformé leur vie et leur activité grâce à nos services de coaching."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Le coaching avec OM m'a permis de définir clairement mes objectifs professionnels et d'établir un plan d'action concret. J'ai enfin réussi à lancer mon entreprise avec confiance."
              name="Sophie Dupont"
              position="Entrepreneure"
            />
            <TestimonialCard 
              quote="Grâce à OM Coaching, notre équipe a développé une communication plus efficace et une meilleure cohésion. Notre productivité a augmenté de 30% en seulement trois mois."
              name="Marc Leroy"
              position="Directeur Commercial"
              company="Innovatech"
            />
            <TestimonialCard 
              quote="J'étais à un carrefour dans ma vie personnelle et professionnelle. Les sessions avec mon coach m'ont aidé à clarifier mes priorités et à prendre des décisions alignées avec mes valeurs."
              name="Julie Martin"
              position="Responsable RH"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Prêt à transformer votre potentiel en réussite?"
        subtitle="Prenez rendez-vous pour une consultation gratuite et découvrez comment notre coaching peut vous aider à atteindre vos objectifs."
        buttonText="Contactez-nous"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default Home;
