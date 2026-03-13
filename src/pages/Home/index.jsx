import { Hero } from '../../components/Hero/Hero';
import { AboutSection } from '../../components/AboutSection/AboutSection';
import { ClientsSection } from '../../components/ClientsSection/ClientsSection';
import { ServicesSection } from '../../components/ServicesSection/ServicesSection';
import { PortfolioSection } from '../../components/PortfolioSection/PortfolioSection';
import { FaqSection } from '../../components/FaqSection/FaqSection';
import { ContactSection } from '../../components/ContactSection/ContactSection';
import { Footer } from '../../components/Footer/Footer';

export const Home = () => {
    return (
        <div className="w-full flex flex-col">
            <Hero />
            <AboutSection />
            <ClientsSection />
            <ServicesSection />
            <PortfolioSection />
            <FaqSection />
            <ContactSection />
        </div>
    );
};