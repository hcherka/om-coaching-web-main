import { useState } from "react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { Calendar, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        service: "coaching-de-vie"
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/contact.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Erreur lors de l’envoi du message');
            }

            toast({
                title: "Message envoyé!",
                description: "Nous vous contacterons très bientôt.",
                duration: 5000,
            });

            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
                service: "coaching-de-vie"
            });
        } catch (error: any) {
            toast({
                title: "Erreur",
                description: error.message || "Une erreur est survenue.",
                variant: "destructive",
                duration: 7000,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Layout>
            {/* Hero Section */}
            

            {/* Contact Information and Form */}
            <section className=" bg-white">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <SectionTitle
                                title="Nos coordonnées"
                                subtitle="Plusieurs façons de nous joindre pour discuter de vos besoins."
                            />

                            <div className="space-y-8 mt-8">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-coaching-100 text-coaching-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium mb-2">Notre adresse</h3>
                                        <p className="text-gray-600">123 Avenue des Coaching<br />75008 Paris, France</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-coaching-100 text-coaching-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium mb-2">Téléphone</h3>
                                        <p className="text-gray-600">+33 (0)1 23 45 67 89</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-coaching-100 text-coaching-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium mb-2">Email</h3>
                                        <p className="text-gray-600">contact@om-coaching.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-coaching-100 text-coaching-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium mb-2">Horaires</h3>
                                        <p className="text-gray-600">
                                            Lundi - Vendredi: 9h00 - 19h00<br />
                                            Samedi: 9h00 - 13h00<br />
                                            Dimanche: Fermé
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-coaching-100 text-coaching-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <Calendar size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium mb-2">Rendez-vous</h3>
                                        <p className="text-gray-600 mb-3">
                                            Les consultations se font sur rendez-vous, en présentiel ou en visioconférence.
                                        </p>
                                        <a href="#form" className="btn-secondary inline-block">
                                            Prendre rendez-vous
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="form">
                            <SectionTitle
                                title="Formulaire de contact"
                                subtitle="Envoyez-nous un message et nous vous répondrons dans les plus brefs délais."
                            />

                            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Nom complet *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coaching-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coaching-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Téléphone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coaching-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                                            Service qui vous intéresse
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coaching-500 focus:border-transparent"
                                        >
                                            <option value="coaching-de-vie">Coaching de vie</option>
                                            <option value="coaching-de-carriere">Coaching de carrière</option>
                                            <option value="coaching-d-equipe">Coaching d'équipe</option>
                                            <option value="coaching-de-dirigeants">Coaching de dirigeants</option>
                                            <option value="autre">Autre</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                        Sujet *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coaching-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coaching-500 focus:border-transparent"
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-primary w-full flex justify-center items-center"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Envoi en cours...
                                            </>
                                        ) : "Envoyer le message"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="py-20 bg-gray-50">
                <div className="section-container">
                    <SectionTitle
                        title="Nous trouver"
                        subtitle="Notre cabinet est idéalement situé dans le centre de Paris."
                        center
                    />

                    <div className="mt-8 h-96 rounded-lg overflow-hidden shadow-md">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047342985!2d2.293906576673664!3d48.87456030701482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc4a7e33c13%3A0xa0b82bea5f61572!2s8th%20arrondissement%20of%20Paris%2C%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1721336600095!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="OM Coaching location"
                        ></iframe>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Contact;
