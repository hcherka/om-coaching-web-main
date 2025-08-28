import { useState } from "react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import CTA from "@/components/CTA";
import { HandshakeIcon, UsersIcon, SettingsIcon } from "lucide-react";

const tabsData = [
    {
        key: 'vision',
        label: 'Ma vision',
        icon: <HandshakeIcon size={24} />,
        content: (
            <>
                <p className="italic text-coaching-800 mb-4">
                    Renforcer la cohésion – Fédérer autour d’une vision – Agir ensemble
                </p>
            </>
        ),
    },
    {
        key: 'objectifs',
        label: 'Objectifs',
        icon: <UsersIcon size={24} />,
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Créer ou renforcer les liens entre les membres de l’équipe</li>
                <li>Améliorer la communication et l’écoute active</li>
                <li>Développer la confiance mutuelle et la solidarité</li>
                <li>Clarifier les valeurs partagées, les missions, les rôles</li>
                <li>Identifier les forces collectives et les leviers de performance</li>
                <li>Favoriser l’engagement individuel au service du collectif</li>
                <li>La gestion de conflits</li>
            </ul>
        ),
    },
    {
        key: 'methodes',
        label: 'Méthodes & Outils',
        icon: <SettingsIcon size={24} />, // Remplacement ici
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Ateliers expérientiels (jeux de coopération, mises en situation, métaphores collectives)</li>
                <li>Outils issus du coaching d’équipe, de la dynamique des groupes et de la sociologie des organisations</li>
                <li>Travail sur les représentations, la posture managériale, la gouvernance d’équipe</li>
                <li>Techniques de facilitation : codéveloppement, photolangage, cercles de parole</li>
                <li>Évaluation des besoins en amont + bilan à chaud/froid</li>
            </ul>
        ),
    },
];


const CoachingEquipe = () => {
    const [activeTab, setActiveTab] = useState('vision');

    return (
        <Layout>
            <section className="py-20 bg-white">
                <div className="section-container max-w-5xl mx-auto">
                    <SectionTitle
                        title="Coaching d’équipe"
                        subtitle="Renforcer la cohésion et la performance collective."
                        center
                    />

                    <p className="text-gray-700 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
                        Fort de 26 ans d’enseignement en sciences économiques et sociales, passionné par la
                        sociologie du travail et des organisations, j’accompagne les équipes et les dirigeants
                        en mobilisant une double expertise : celle d’un pédagogue formé à l’analyse des dynamiques
                        sociales, et celle d’un coach certifié spécialisé en coaching d’équipe. Grâce à une approche
                        alliant outils de coaching, pédagogie active et intelligence collective, mes interventions
                        visent à transformer les groupes en équipes engagées et alignées.
                    </p>

                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Onglets vertical */}
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
                        <div className="md:w-2/3 bg-coaching-50 rounded-xl shadow-lg border border-coaching-200 p-8 min-h-[280px]">
                            {tabsData.find(tab => tab.key === activeTab)?.content}
                        </div>
                    </div>
                </div>
            </section>

            <CTA
                title="Faites grandir votre équipe"
                subtitle="Planifiez une séance d’accompagnement dès maintenant."
                buttonText="Je prends rendez-vous"
                buttonLink="/contact"
            />
        </Layout>
    );
};

export default CoachingEquipe;
