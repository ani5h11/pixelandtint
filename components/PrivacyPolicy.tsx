import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-white pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6 sm:px-8">
                <h1 className="text-4xl md:text-5xl font-black text-navy uppercase italic tracking-tighter mb-8">
                    Privacy <span className="text-brightBlue">Policy</span>
                </h1>

                <div className="prose prose-lg max-w-none text-navy/70 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-navy uppercase tracking-tight mb-4">1. Introduction</h2>
                        <p>
                            At Pixel & Tint, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our window tinting services in Launceston, Tasmania.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-navy uppercase tracking-tight mb-4">2. Information We Collect</h2>
                        <p>
                            We may collect personal information that you provide directly to us, such as:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Name and contact information (email address, phone number).</li>
                            <li>Vehicle details (make, model, year) for service quotes.</li>
                            <li>Property details for residential or commercial tinting quotes.</li>
                            <li>Any other information you choose to provide via our contact forms.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-navy uppercase tracking-tight mb-4">3. How We Use Your Information</h2>
                        <p>
                            The information we collect is used to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide, operate, and maintain our services.</li>
                            <li>Process your requests for quotes and bookings.</li>
                            <li>Communicate with you regarding your service.</li>
                            <li>Send you updates or promotional materials (if you have opted in).</li>
                            <li>Improve our website and customer experience.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-navy uppercase tracking-tight mb-4">4. Data Security</h2>
                        <p>
                            We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-navy uppercase tracking-tight mb-4">5. Cookies</h2>
                        <p>
                            Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some functionality of the site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-navy uppercase tracking-tight mb-4">6. Third-Party Links</h2>
                        <p>
                            Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of these external sites.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-navy uppercase tracking-tight mb-4">7. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <p className="font-bold mt-2">
                            Pixel & Tint<br />
                            Email: hello@pixelandtint.com.au<br />
                            Phone: 0450 216 892
                        </p>
                    </section>

                    <p className="text-sm font-medium opacity-50 pt-12">
                        Last Updated: February 23, 2026
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
