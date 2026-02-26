import React, { Suspense, lazy } from 'react';
import Hero from './Hero';
import BenefitsOfTint from './BenefitsOfTint';
import AboutUs from './AboutUs';

// Lazy load below-the-fold components for performance
const TintDarknessVisualizer = lazy(() => import('./TintDarknessVisualizer'));
const TypesOfTint = lazy(() => import('./TypesOfTint'));
const About = lazy(() => import('./About'));
const Services = lazy(() => import('./Services'));
const Testimonials = lazy(() => import('./Testimonials'));
const FAQPreview = lazy(() => import('./FAQPreview'));
const Contact = lazy(() => import('./Contact'));

const SectionLoader = () => (
    <div className="flex h-64 w-full items-center justify-center bg-canvas">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-navy/10 border-t-brightBlue"></div>
    </div>
);

const Home: React.FC = () => {
    return (
        <main>
            <Hero />
            <BenefitsOfTint />
            <AboutUs />

            <Suspense fallback={<SectionLoader />}>
                <TintDarknessVisualizer />
                <TypesOfTint />
                <About />
                <Services />
                <Testimonials />
                <FAQPreview />
                <Contact />
            </Suspense>
        </main>
    );
};

export default Home;
