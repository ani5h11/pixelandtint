import React, { Suspense, lazy } from 'react';
import Hero from './Hero';
// Lazy load below-the-fold components for performance
const BenefitsOfTint = lazy(() => import('./BenefitsOfTint'));
const AboutUs = lazy(() => import('./AboutUs'));

// Lazy load below-the-fold components for performance
const TintDarknessVisualizer = lazy(() => import('./TintDarknessVisualizer'));
const TypesOfTint = lazy(() => import('./TypesOfTint'));
const About = lazy(() => import('./About'));
const Services = lazy(() => import('./Services'));
const Testimonials = lazy(() => import('./Testimonials'));
const FAQPreview = lazy(() => import('./FAQPreview'));

const SectionLoader = () => (
    <div className="flex h-64 w-full items-center justify-center bg-canvas">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-navy/10 border-t-brightBlue"></div>
    </div>
);

const Home: React.FC = () => {
    return (
        <main>
            <Hero />
            <Suspense fallback={<SectionLoader />}>
                <BenefitsOfTint />
                <AboutUs />
                <TintDarknessVisualizer />
                <TypesOfTint />
                <About />
                <Services />
                <Testimonials />
                <FAQPreview />
            </Suspense>
        </main>
    );
};

export default Home;
