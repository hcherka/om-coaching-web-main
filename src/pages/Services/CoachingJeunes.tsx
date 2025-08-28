import { useState } from "react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import CTA from "@/components/CTA";
import { UserPlus, ClipboardList, HeartHandshake, Target } from "lucide-react";

const tabsData = [
    {
        key: 'accompagnement',
        label: 'Accompagnement sur mesure',
        icon: <UserPlus size={24} />,
        content: (
            <>
                <p className="mb-4">
                    Tu te sens parfois perdu ? En questionnement sur ton avenir, ton identité ou tes choix ? Tu as du mal à te motiver, à t’organiser, ou à gérer le stress du quotidien ? Tu n’es pas seul.
                </p>
                <p className="mb-4">
                    Aujourd’hui, beaucoup de jeunes et de jeunes adultes vivent des passages flous, des transitions difficiles ou des moments de doute. Mon rôle : t’aider à traverser ces étapes avec plus de clarté, d’équilibre et de confiance.
                </p>
                <p>
                    Coach certifié et enseignant depuis 26 ans, je propose un espace d’écoute bienveillant et structuré pour t’accompagner à ton rythme, en respectant qui tu es, là où tu en es.
                </p>
            </>
        ),
    },
    {
        key: 'concretement',
        label: 'Concrètement, je t’aide à…',
        icon: <ClipboardList size={24} />,
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Clarifier tes envies, tes projets, ton orientation (études, pro, vie perso)</li>
                <li>Retrouver confiance en toi et en tes capacités</li>
                <li>Apprendre à mieux t’organiser et gérer ton temps</li>
                <li>Gérer ton stress, ta pression et tes émotions</li>
                <li>Sortir de l’auto-sabotage, du doute, de la procrastination</li>
                <li>Trouver du sens et reconnecter avec ce qui te motive</li>
            </ul>
        ),
    },
    {
        key: 'propose',
        label: 'Ce que je propose',
        icon: <HeartHandshake size={24} />,
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Un bilan de départ pour faire le point</li>
                <li>Des séances individuelles en visio, en présentiel ou à domicile</li>
                <li>Des outils concrets et personnalisés (gestion du temps, ancrage, visualisation, orientation…)</li>
                <li>Une relation de confiance basée sur l’écoute active, le respect et la co-construction</li>
            </ul>
        ),
    },
    {
        key: 'pourquoi',
        label: 'Pourquoi me faire confiance ?',
        icon: <Target size={24} />,
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>🎓 Double expertise : 26 ans auprès de jeunes dans le monde éducatif et associatif, aujourd’hui coach certifié</li>
                <li>👂 Une posture d’écoute, pas de jugement : je ne conseille pas, je t’aide à trouver tes propres réponses</li>
                <li>🤝 Un accompagnement humain, adapté à chacun : pas de méthode toute faite, mais un chemin à co-construire ensemble</li>
            </ul>
        ),
    },
    {
        key: 'pourqui',
        label: 'Pour qui ?',
        icon: <UserPlus size={24} />,
        content: (
            <>
                <ul className="list-disc pl-5 space-y-2">
                    <li>🧭 Ceux qui cherchent un cap</li>
                    <li>💬 Ceux qui veulent mieux se connaître</li>
                    <li>🔥 Ceux qui veulent se relever après un échec ou un blocage</li>
                    <li>🌱 Ceux qui veulent juste avancer, autrement</li>
                </ul>
                <p className="mt-3 italic">"Tu n’as pas besoin d’avoir toutes les réponses. Tu as besoin d’un espace pour les faire émerger."</p>
            </>
        ),
    }
];

const CoachingJeunes = () => {
    const [activeTab, setActiveTab] = useState('accompagnement');

    return (
        <Layout>
            <section className="py-20 bg-white">
                <div className="section-container max-w-5xl mx-auto">
                    <SectionTitle
                        title="Coaching jeunes & jeunes adultes"
                        subtitle="Retrouver confiance, clarté et direction."
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
                title="Prêt à passer à l’action ?"
                subtitle="Réservez dès maintenant votre séance découverte."
                buttonText="Je prends rendez-vous"
                buttonLink="/contact"
            />
        </Layout>
    );
};

export default CoachingJeunes;
