import { useEffect } from 'react';

interface PageMeta {
    title: string;
    description: string;
    canonical?: string;
}

/**
 * Hook to dynamically update <title>, <meta description>, and <link canonical>
 * for each page. Helps Google index SPA routes with unique metadata.
 */
export function usePageMeta({ title, description, canonical }: PageMeta) {
    useEffect(() => {
        // Update document title
        document.title = title;

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        }

        // Update canonical URL
        const canonicalLink = document.querySelector('link[rel="canonical"]');
        if (canonicalLink && canonical) {
            canonicalLink.setAttribute('href', canonical);
        }
    }, [title, description, canonical]);
}
