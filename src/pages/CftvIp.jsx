import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
            <Header />
            <main className="flex-grow">
                <Hero />
                <ServicesSection />

                {/* Projects Carousel removed as requested */}

                {/* Banner CTA */}
                <section className="py-20 bg-primary text-white text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar sua segurança?</h2>
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                            Nossa equipe de especialistas está pronta para desenvolver o projeto ideal para sua necessidade.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-secondary text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:bg-secondary/90 transition-all transform hover:-translate-y-1 decoration-none"
                        >
                            Solicitar Consultoria Gratuita
                        </a>
                    </div>
                </section>

                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
