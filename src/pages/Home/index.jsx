import { Hero } from '../../components/Hero/Hero';
import { AboutSection } from '../../components/AboutSection/AboutSection';
import { PortfolioSection } from '../../components/PortfolioSection/PortfolioSection';
import { ContactSection } from '../../components/ContactSection/ContactSection';

export const Home = () => {
    return (
        <div className="w-full flex flex-col">
            <Hero />
            <AboutSection />
            <PortfolioSection />
            <ContactSection />
        </div>
    );
};