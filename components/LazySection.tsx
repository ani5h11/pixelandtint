import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface LazySectionProps {
    children: ReactNode;
    fallback?: ReactNode;
    rootMargin?: string;
}

const LazySection: React.FC<LazySectionProps> = ({
    children,
    fallback = null,
    rootMargin = '200px 0px' // Load when within 200px of scrolling into view
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // If IntersectionObserver isn't supported, just render the content immediately
        if (typeof IntersectionObserver === 'undefined') {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once it's visible, we don't need to observe anymore
                    if (containerRef.current) {
                        observer.unobserve(containerRef.current);
                    }
                }
            },
            { rootMargin }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(containerRef.current);
            }
        };
    }, [rootMargin]);

    return (
        <div ref={containerRef} className="min-h-[100px]">
            {isVisible ? children : fallback}
        </div>
    );
};

export default LazySection;
