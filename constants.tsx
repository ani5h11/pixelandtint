import React from 'react';
import { Car, Home, ShieldCheck, Zap, ThermometerSnowflake, Eye, Sun, UserCheck } from 'lucide-react';
import { ServiceCardProps, Testimonial, GalleryImage } from './types';

export const SERVICES: ServiceCardProps[] = [
  {
    title: 'Automotive Tinting',
    description: 'Ultra-clear, heat-rejecting film designed for Tasmania’s roads. Affordable service with quality tint. Full Car Tinting starts from $249 for Classic, $399 for Ceramic, and $449 for Nano Ceramic.',
    icon: <Car className="w-8 h-8 text-brightBlue" />,
    imageUrl: '/assets/whitesuv.jpg'
  },
  {
    title: 'Residential Tinting',
    description: 'Keep your home cool in summer and warm in winter. Enhance privacy without sacrificing your view.',
    icon: <Home className="w-8 h-8 text-brightBlue" />,
    imageUrl: '/assets/window.avif'
  },
  // {
  //   title: 'Commercial Tinting',
  //   description: 'Energy-efficient solutions for offices and retail spaces. Reduce glare on screens and cut overhead costs.',
  //   icon: <ShieldCheck className="w-8 h-8 text-brightBlue" />,
  //   imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  // }
];

export const BENEFITS = [
  {
    title: 'Skin Cancer Defense',
    desc: 'With Australia’s harsh UV levels, our films provide SPF 1000+ protection, blocking 99.9% of rays that cause skin aging and cancer.',
    icon: <Sun className="w-6 h-6" />,
    metric: 'SPF 1000+ Rating',
    impact: 'Cancer Prevention'
  },
  {
    title: 'Slash Energy Costs',
    desc: 'Reduce cabin and room temperatures by up to 15°C. Your AC works less, saving fuel in your car and power in your home.',
    icon: <Zap className="w-6 h-6" />,
    metric: 'Up to 30% Savings',
    impact: 'Efficiency'
  },
  {
    title: 'Interior Preservation',
    desc: 'Stop your leather from cracking and dash from warping. Our film pays for itself by maintaining your asset’s resale value.',
    icon: <UserCheck className="w-6 h-6" />,
    metric: '90% Fade Reduction',
    impact: 'Resale Value'
  },
  {
    title: 'Total Heat Rejection',
    desc: 'Block the "burning" sensation of direct sunlight. Ceramic particles filter out infrared heat without making the glass dark.',
    icon: <ThermometerSnowflake className="w-6 h-6" />,
    metric: '92% Heat Block',
    impact: 'Daily Comfort'
  },
  {
    title: 'Anti-Shatter Security',
    desc: 'In an accident or attempted break-in, the film holds broken glass together, preventing flying shards from injuring passengers.',
    icon: <ShieldCheck className="w-6 h-6" />,
    metric: 'Safety Barrier',
    impact: 'Security'
  },
  {
    title: 'Instant Eye Relief',
    desc: 'Eliminate blinding glare from the sun and oncoming LED headlights. Drive safer with significantly reduced eye fatigue.',
    icon: <Eye className="w-6 h-6" />,
    metric: '80% Less Glare',
    impact: 'Driving Safety'
  }
];

export const FEATURES = [
  { title: 'UV Protection', icon: <ShieldCheck />, desc: 'Blocks 99% of harmful UV rays.' },
  { title: 'Heat Control', icon: <ThermometerSnowflake />, desc: 'Reduces solar heat gain by up to 60%.' },
  { title: 'Instant Style', icon: <Zap />, desc: 'Modern, sleek appearance for any window.' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "James Wilson",
    role: "Tesla Owner",
    content: "The level of precision in their work is unmatched. My Model 3 looks futuristic and stays noticeably cooler in the Launceston sun.",
    avatar: "https://i.pravatar.cc/150?u=james"
  },
  {
    id: 2,
    name: "Sarah Thompson",
    role: "Homeowner",
    content: "Excellent service. They tinted our large north-facing windows and the glare reduction is a game changer for my home office.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 3,
    name: "Mark Henderson",
    role: "Business Manager",
    content: "Professional team, fast installation, and high-quality results for our corporate headquarters. Highly recommended.",
    avatar: "https://i.pravatar.cc/150?u=mark"
  }
];

export const CONTACTS = {
  email: "pixelandtintau@gmail.com",
  phone: "0450216892",
  address: "Melbourne Street, Launceston TAS 7249",
  hours: "Appointments Only",
  facebook: "https://www.facebook.com/share/1AMuNiNB3j/?mibextid=wwXlfr",
  instagram: "https://www.instagram.com/pixelandtintau/",
};

export const GALLERY: GalleryImage[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800', category: 'Automotive', title: 'Tesla Model S Pro-Tint' },
  { id: 2, url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800', category: 'Automotive', title: 'Luxury Sedan Carbon Finish' },
  { id: 3, url: 'https://images.unsplash.com/photo-1600566752355-3979ff1040ad?auto=format&fit=crop&q=80&w=800', category: 'Residential', title: 'Modern Estate Heat Shield' },
  { id: 4, url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800', category: 'Commercial', title: 'Tech Hub Office Glare Filter' },
];

export const FAQS = [
  {
    question: "Is professional window tinting worth the investment in 2026?",
    answer: "Yes. Professional window tinting provides a high ROI by preventing interior fading (preserving resale value), reducing energy costs by up to 30% in residential settings, and providing a shatter-resistant layer for enhanced glass safety."
  },
  {
    question: "Is window tint legal in Tasmania?",
    answer: "Yes, window tint is legal provided it meets the required light transmission limits. The front windscreen must allow at least 70% light (except for the top strip), front side windows at least 35%, and rear windows 20% or darker only if the vehicle has compliant side mirrors, with reflectance not exceeding 10%."
  },
  {
    question: "How does window tinting improve electric vehicle (EV) range?",
    answer: "Window tinting is a range extender for EVs. High-quality Ceramic Tint rejects up to 99% of infrared heat, significantly reducing the load on your air conditioning system. By keeping the cabin cooler naturally, your battery spends less energy on climate control, preserving more power for kilometers on the road."
  },
  {
    question: "What types of window tint do you offer?",
    answer: "We offer a range of premium films including carbon, ceramic, and metalized tints. Each type has specific benefits regarding heat rejection, UV protection, and durability."
  },
  {
    question: "How long does the tinting process take?",
    answer: "For most sedans and hatchbacks, the process takes about 2 to 4 hours. SUVs and trucks may take slightly longer depending on the number of windows."
  },
  {
    question: "How long does professional window tint last?",
    answer: "The lifespan depends on the material. Standard dyed films typically last 3–5 years, while carbon films last 7–10 years. Premium nano-ceramic and graphene-infused films are structurally permanent and often come with a lifetime warranty, lasting 15–20+ years without fading, bubbling, or turning purple."
  },
  {
    question: "Do you provide any warranty?",
    answer: "Yes, we provide a lifetime warranty on our products."
  },
  {
    question: "Can I roll down my windows immediately after tinting?",
    answer: "We recommend keeping your windows rolled up for at least 48 hours to allow the adhesive to cure properly and prevent the film from shifting."
  },
  {
    question: "Does window tint reduce heat inside my car?",
    answer: "Yes. Premium ceramic window tint can significantly reduce interior heat by blocking infrared rays and solar energy. This improves comfort and reduces strain on your air conditioning system."
  },

  {
    question: "How much heat does ceramic window tint actually block?",
    answer: "High-performance nano-ceramic window films block up to 98% of Infrared (IR) heat and 99.9% of UV rays. Unlike standard dyed films, ceramic technology reduces interior cabin temperatures by up to 25°F, significantly lowering the load on your AC system and extending EV battery range."
  },
  {
    question: "What is the best way to clean tinted windows without damaging them?",
    answer: "To preserve your tint, wait 3–5 days after installation before cleaning. Always use an ammonia-free cleaner and a clean microfiber cloth. Avoid paper towels or abrasive pads, which can create micro-scratches. Simple distilled water with a drop of mild dish soap is the safest and most effective solution."
  },

  {
    question: "Can window tint be removed?",
    answer: "Yes. Professional window tint can be safely removed without damaging the glass when handled by experienced technicians."
  },






];