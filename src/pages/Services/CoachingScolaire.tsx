import { useState } from "react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import CTA from "@/components/CTA";
import { GraduationCap, UserCheck, BookOpen, Heart, Target } from "lucide-react";

const tabsData = [
    {
        key: 'accompagnement',
        label: 'Accompagnement sur mesure',
        icon: <GraduationCap size={24} />,
        content: (
            <>
                <p className="mb-4">
                    Coach certifié et enseignant de lycée depuis 26 ans, j’ai accompagné des milliers de jeunes
                    dans leur construction personnelle et dans leurs apprentissages. Aujourd’hui, je mets cette
                    double expertise — pédagogique et humaine — au service des collégiens, lycéens, étudiants… et de leurs parents.
                </p>
                <p>
                    Parce que chaque parcours est unique, je propose un accompagnement personnalisé, bienveillant
                    et structuré, pour aider les jeunes à retrouver du sens, de la confiance et des outils concrets.
                </p>
            </>
        ),
    },
    {
        key: 'jeunes',
        label: 'J’accompagne les jeunes à…',
        icon: <UserCheck size={24} />,
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Retrouver la motivation et le goût d’apprendre</li>
                <li>Améliorer leurs méthodes de travail et leur organisation</li>
                <li>Gérer le stress, la pression scolaire et les examens</li>
                <li>Renforcer leur confiance en eux et leur estime personnelle</li>
                <li>Clarifier leur orientation et leurs choix d’avenir</li>
                <li>Se remettre en mouvement après un décrochage, une difficulté ou une perte de repères</li>
            </ul>
        ),
    },
    {
        key: 'parents',
        label: 'J’accompagne aussi les parents à…',
        icon: <BookOpen size={24} />,
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Mieux comprendre les besoins et les blocages de leur enfant</li>
                <li>Adopter une posture de soutien juste, sans surprotéger ni culpabiliser</li>
                <li>Retrouver un dialogue apaisé en famille autour des enjeux scolaires</li>
            </ul>
        ),
    },
    {
        key: 'methodes',
        label: 'Méthode et outils',
        icon: <Heart size={24} />,
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>L’écoute active et l’alliance avec le jeune</li>
                <li>Analyse fine des freins et des leviers (connaissance des adolescents)</li>
                <li>Outils concrets et adaptés à chaque profil (organisation, gestion du temps, auto-évaluation, orientation…)</li>
                <li>Posture de coach : ni professeur, ni psychologue, mais accompagnant vers l’autonomie et l’épanouissement</li>
            </ul>
        ),
    },
    {
        key: 'propose',
        label: 'Ce que je propose concrètement',
        icon: <BookOpen size={24} />,
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Bilan personnalisé en début d’accompagnement</li>
                <li>Séances individuelles (présentiel, visio ou à domicile), orientées solutions</li>
                <li>Outils pratiques : gestion du temps, planification, auto-évaluation, techniques de concentration</li>
                <li>Points réguliers avec les parents si nécessaire</li>
                <li>Travail autour de l’orientation choisie, non subie</li>
            </ul>
        ),
    },
    {
        key: 'resultats',
        label: 'Pour quels résultats ?',
        icon: <Target size={24} />,
        content: (
            <>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Un jeune qui reprend confiance en lui et comprend ses modes d’apprentissage</li>
                    <li>Un climat familial apaisé face aux enjeux scolaires</li>
                    <li>Un projet d’orientation plus clair, choisi, non subi</li>
                    <li>Des progrès visibles à l’école comme dans la posture personnelle</li>
                </ul>
                <p className="mt-3 italic">
                    "On ne motive pas un jeune en lui mettant la pression. On l’aide à se reconnecter à ses ressources, à ce qui a du sens pour lui, à ce qui le rend vivant."
                </p>
            </>
        ),
    }
];

const CoachingScolaire = () => {
    const [activeTab, setActiveTab] = useState('accompagnement');

    return (
        <Layout>
            <section className="py-20 bg-white">
                <div className="section-container max-w-5xl mx-auto">
                    <SectionTitle
                        title="Coaching scolaire & étudiant"
                        subtitle="Pour réussir, se révéler et trouver son chemin."
                        center
                    />

                    <div className="flex flex-col md:flex-row gap-8 mt-12">
                        {/* Onglets verticaux */}
                        <nav className="flex flex-row md:flex-col md:w-1/3 bg-coaching-50 rounded-xl shadow-lg border border-coaching-200 p-4">
                            {tabsData.map(({ key, label, icon }) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`flex items-center gap-3 py-3 px-4 mb-3 rounded-lg font-semibold cursor-pointer transition-colors
                    ${activeTab === key ? 'bg-coaching-600 text-white shadow-md' : 'text-coaching-700 hover:bg-coaching-100'}`}
                                    aria-current={activeTab === key ? 'true' : 'false'}
                                >
                                    {icon}
                                    <span>{label}</span>
                                </button>
                            ))}
                        </nav>

                        {/* Contenu onglet */}
                        <div className="md:w-2/3 bg-coaching-50 rounded-xl shadow-lg border border-coaching-200 p-8 min-h-[320px] text-gray-700 text-lg leading-relaxed">
                            {tabsData.find(tab => tab.key === activeTab)?.content}
                        </div>
                    </div>
                </div>
            </section>

            <CTA
                title="Prêt à avancer ?"
                subtitle="Réservez votre première séance dès maintenant."
                buttonText="Je prends rendez-vous"
                buttonLink="/contact"
            />
        </Layout>
    );
};

export default CoachingScolaire;
