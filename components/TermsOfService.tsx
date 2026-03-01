import React from 'react';

const TermsOfService: React.FC = () => {
    return (
        <div className="min-h-screen bg-white pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6 sm:px-8">
                <h1 className="text-4xl md:text-5xl font-black text-navy uppercase italic tracking-tighter mb-8">
                    Terms of <span className="text-brightBlue">Service</span>
                </h1>

                <div className="prose prose-lg max-w-none text-navy/70 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-navy uppercase tracking-tight mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing our website or using the services provided by Pixel & Tint ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-navy uppercase tracking-tight mb-4">2. Description of Services</h2>
                        <p>
                            Pixel & Tint provides professional window tinting services for automotive, residential, and commercial properties. All services are subject to availability and our formal quotation process.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-navy uppercase tracking-tight mb-4">3. Quotations and Pricing</h2>
                        <p>
                            Quotations provided via our website or over the phone are estimates based on the information provided. Final pricing is subject to on-site inspection of the vehicle or property. Standard prices mentioned on the site (e.g., "$249 for Classic") are for standard vehicles and may vary for larger or specialized vehicles.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-navy uppercase tracking-tight mb-4">4. Intellectual Property</h2>
                        <p>
                            All content on this website, including but not limited to text, graphics, logos, and images, is the property of Pixel & Tint and is protected by Australian and international copyright laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-navy uppercase tracking-tight mb-4">5. Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted by law, Pixel & Tint shall not be liable for any indirect, incidental, or consequential damages arising out of the use of our services or website. We provide professional installation, but we are not liable for pre-existing defects in glass or surfaces.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-navy uppercase tracking-tight mb-4">6. Warranty</h2>
                        <p>
                            Warranty terms vary depending on the specific film product selected. Warranty details will be provided at the time of installation. Misuse, improper cleaning, or physical damage to the film after installation is not covered by warranty.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-navy uppercase tracking-tight mb-4">7. Governing Law</h2>
                        <p>
                            These Terms of Service are governed by and construed in accordance with the laws of Tasmania, Australia. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Tasmania.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-navy uppercase tracking-tight mb-4">8. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-navy uppercase tracking-tight mb-4">9. Contact Information</h2>
                        <p>
                            If you have any questions regarding these Terms of Service, please contact us at pixelandtintau@gmail.com.
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

export default TermsOfService;
