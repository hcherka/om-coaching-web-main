import { useState } from "react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import CTA from "@/components/CTA";
import { BrainCircuit, Info, Users, Target, Activity } from "lucide-react";

const tabsData = [
    {
        key: 'accompagnement',
        label: 'Accompagnement par Neurofeedback',
        icon: <BrainCircuit size={24} />,
        content: (
            <>
                <p className="mb-4">
                    Grâce à ma certification en neurofeedback, je propose un accompagnement permettant
                    d’entraîner le cerveau à retrouver équilibre et flexibilité. Cette approche douce et
                    non invasive s’adresse autant aux personnes souhaitant réduire le stress, améliorer
                    leur sommeil, renforcer leur concentration qu’à celles cherchant à optimiser leurs
                    performances cognitives et émotionnelles.
                </p>
                <p>
                    Le neurofeedback vient ainsi compléter mes pratiques de coaching, en offrant un outil
                    concret et efficace pour développer son potentiel, dépasser certaines difficultés
                    et retrouver un mieux-être durable.
                </p>
            </>
        ),
    },
    {
        key: 'definition',
        label: 'Qu’est-ce que le neurofeedback ?',
        icon: <Info size={24} />,
        content: (
            <p>
                Le neurofeedback est une méthode douce et non invasive qui permet au cerveau d’apprendre
                à mieux s’autoréguler. Grâce à des capteurs posés sur le cuir chevelu, l’activité
                cérébrale est enregistrée et renvoyée sous forme de signaux visuels ou sonores. Au fil
                des séances, le cerveau développe de nouveaux automatismes favorisant l’équilibre émotionnel,
                la concentration et le bien-être.
            </p>
        ),
    },
    {
        key: 'pourqui',
        label: 'Pour qui ?',
        icon: <Users size={24} />,
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Santé / Bien-être / Santé psychique :</strong> stress, anxiété, burn-out, peurs, hyper-émotivité, impulsivité, hyperactivité, troubles de la mémoire, concentration, organisation, troubles du sommeil, fatigue chronique, douleurs persistantes.</li>
                <li><strong>Troubles neurodéveloppementaux :</strong> TDA/H, troubles « Dys » (dyslexie, dysorthographie, dyscalculie, dysphasie, dysgraphie, dyspraxie)</li>
                <li><strong>Performance / Potentiel :</strong> musiciens, danseurs, athlètes, dirigeants, cadres souhaitant optimiser leur performance, créativité, concentration, confiance, etc.</li>
            </ul>
        ),
    },
    {
        key: 'resultats',
        label: 'Résultats attendus',
        icon: <Target size={24} />,
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Diminution du stress, anxiété, émotivité, impulsivité, colères, conflits, maladresses, doutes, hyperactivité, difficultés « Dys », phobies, échecs, douleurs chroniques, insomnies, réveils nocturnes.</li>
                <li>Amélioration de l’attention, concentration, mémoire, flexibilité mentale, rapidité d’apprentissage, gestion émotionnelle, estime et confiance en soi, organisation, prise de décision, communication, créativité, relations sociales, performance, bien-être global et qualité de vie.</li>
            </ul>
        ),
    },
    {
        key: 'deroulement',
        label: 'Déroulement d’une séance',
        icon: <Activity size={24} />,
        content: (
            <>
                <ol className="list-decimal pl-5 space-y-2">
                    <li>Accueil & échanges : définition des besoins et objectifs.</li>
                    <li>Installation : pose de capteurs légers et indolores sur le cuir chevelu.</li>
                    <li>Exercice : le participant regarde un film ou joue à un jeu vidéo. Le feedback reçu entraîne le cerveau à s’autoréguler.</li>
                    <li>Bilan : retour d’expérience et suivi personnalisé. Durée moyenne : 30 à 45 minutes par séance.</li>
                </ol>
                <p className="mt-2">
                    Un accompagnement progressif est recommandé pour des résultats durables.
                </p>
            </>
        ),
    },
    {
        key: 'complementarite',
        label: 'Complémentarité Neurofeedback & Coaching',
        icon: <BrainCircuit size={24} />,
        content: (
            <p>
                Le neurofeedback entraîne votre cerveau à être plus stable, concentré et détendu. Le coaching
                vous aide ensuite à transformer ce potentiel en actions concrètes pour atteindre vos objectifs
                personnels, scolaires ou professionnels. Le Neurofeedback peut accompagner, en parallèle ou
                en amont, un traitement médical, une rééducation (orthophonie, psychomotricité, kinésithérapie)
                ou un suivi psychothérapeutique.
            </p>
        ),
    }
];

const CoachingNeurofeedback = () => {
    const [activeTab, setActiveTab] = useState('accompagnement');

    return (
        <Layout>
            <section className="py-20 bg-white">
                <div className="section-container max-w-5xl mx-auto">
                    <SectionTitle
                        title="Coaching & Neurofeedback"
                        subtitle="Entraîner le cerveau pour améliorer performance et bien-être."
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

                        {/* Contenu actif */}
                        <div className="md:w-2/3 bg-coaching-50 rounded-xl shadow-lg border border-coaching-200 p-8 min-h-[320px] text-gray-700 text-lg leading-relaxed">
                            {tabsData.find(tab => tab.key === activeTab)?.content}
                        </div>
                    </div>
                </div>
            </section>

            <CTA
                title="Essayez dès maintenant"
                subtitle="Séance découverte ou programme personnalisé combinant coaching & Neurofeedback."
                buttonText="Je prends rendez-vous"
                buttonLink="/contact"
            />
        </Layout>
    );
};

export default CoachingNeurofeedback;
