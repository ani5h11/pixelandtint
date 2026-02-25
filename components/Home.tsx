import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import TypesOfTint from './TypesOfTint';
import BenefitsOfTint from './BenefitsOfTint';
import Testimonials from './Testimonials';
import Contact from './Contact';
import FAQPreview from './FAQPreview';
import TintDarknessVisualizer from './TintDarknessVisualizer';
import AboutUs from './AboutUs';

const Home: React.FC = () => {
    return (
        <main>
            <Hero />
            <BenefitsOfTint />
            <AboutUs />
            <TintDarknessVisualizer />
            <TypesOfTint />
            <About />
            <Services />
            <Testimonials />
            <FAQPreview />
            <Contact />
        </main>
    );
};

export default Home;
