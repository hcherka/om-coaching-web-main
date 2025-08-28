import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import CTA from "@/components/CTA";
import { Award, Book, CheckCircle, Heart, LightbulbIcon, Target } from "lucide-react";

const About = () => {
  return (
      <Layout>
        {/* Hero Section */}
        <section className="py-20">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900">À propos d'OM Coaching</h1>
                <p className="text-lg text-gray-700 mb-6">
                  Fondé sur des valeurs d'excellence, d'empathie et d'innovation, OM Coaching accompagne les particuliers et les entreprises dans leur développement depuis plus de 10 ans.
                </p>
                <p className="text-lg text-gray-700">
                  Notre mission est de vous aider à libérer votre potentiel, à surmonter les obstacles et à atteindre vos objectifs personnels et professionnels.
                </p>
              </div>
              <div className="relative">
                <div className=" w-full h-full absolute -bottom-4 -left-4 "></div>
                <img
                    src={`${import.meta.env.BASE_URL}faviconNoText.png`}
                    alt="OM Coaching"
                    className=" relative z-10 w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Qui suis-je ? Section */}
        <section className=" bg-white">
          <div className="section-container">
            <SectionTitle
                title="Qui suis-je ?"
                subtitle="Coach certifié et passionné par l'accompagnement humain"
                center
            />
            <div className="   space-y-4 text-gray-700">
              <p>
                Coach certifié, formé par Prisme Évolution, j’ai consacré 26 années de ma vie professionnelle à enseigner les sciences économiques et sociales à des lycéens. Cette longue expérience m’a permis d’acquérir une écoute fine, une compréhension approfondie des dynamiques humaines, et une capacité à accompagner avec bienveillance et exigence.
              </p>
              <p>
                Titulaire d’un diplôme en sciences sociales, j’ai toujours eu à cœur de comprendre l’humain dans sa globalité : ses comportements, ses motivations, ses freins, ses potentiels. Mon parcours m’a également conduit à accompagner des publics très variés, en lien avec des situations sociales, scolaires ou professionnelles complexes, enrichissant ainsi mon approche du coaching.
              </p>
              <h3 className="text-2xl font-semibold pt-10">Ma différence</h3>
              <p>
                Ce qui me distingue ? C’est l’alliance entre une solide base théorique, issue des sciences humaines, et une expérience de terrain riche, forgée au fil des années auprès de jeunes, d’adultes et de professionnels.
              </p>
              <p>
                J’ai fait du goût de l’accompagnement une valeur centrale de mon engagement. Je crois profondément en la capacité de chacun à évoluer, à retrouver du sens, de l’énergie et à reprendre le pouvoir sur sa trajectoire de vie.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className=" bg-white">
          <div className="section-container">
            <SectionTitle
                title="Nos valeurs"
                subtitle="Chez OM Coaching, nos valeurs fondamentales guident toutes nos interactions et notre approche du coaching."
                center
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-coaching-100 text-coaching-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Empathie</h3>
                <p className="text-gray-600">
                  Nous créons un espace de confiance où vous vous sentez écouté et compris sans jugement.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-coaching-100 text-coaching-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-600">
                  Nous nous engageons à offrir un accompagnement de haute qualité et à poursuivre constamment notre développement professionnel.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-coaching-100 text-coaching-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LightbulbIcon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Nous intégrons les dernières recherches et approches pour vous offrir des techniques de coaching efficaces et innovantes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA
            title="Découvrez comment nous pouvons vous accompagner"
            subtitle="Prenez rendez-vous pour une première séance de découverte et discutons de vos objectifs et besoins."
            buttonText="Contactez-nous"
            buttonLink="/contact"
        />
      </Layout>
  );
};

export default About;
