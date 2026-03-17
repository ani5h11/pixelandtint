import React from 'react';
import Hero from './Hero';
import { usePageMeta } from './seo';

import BenefitsOfTint from './BenefitsOfTint';
import AboutUs from './AboutUs';
import TintDarknessVisualizer from './TintDarknessVisualizer';
import TypesOfTint from './TypesOfTint';
import About from './About';
import Services from './Services';
import Testimonials from './Testimonials';
import FAQPreview from './FAQPreview';

const Home: React.FC = () => {
    usePageMeta({
        title: 'Pixel & Tint | Premium Automotive & Home Tint Launceston',
        description: 'Premium window tinting services in Launceston, Tasmania. Expert automotive, residential, and commercial tinting with high-end craftsmanship by Pixel & Tint.',
        canonical: 'https://pixelandtint.com.au/',
    });

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
        </main>
    );
};

export default Home;
