
import React, { useState } from 'react';
import { GALLERY } from '../constants';

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Automotive' | 'Residential' | 'Commercial'>('All');

  const filteredImages = activeCategory === 'All'
    ? GALLERY
    : GALLERY.filter(img => img.category === activeCategory);

  const categories = ['All', 'Automotive', 'Residential', 'Commercial'];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0">
          <div>
            <span className="text-brightBlue font-bold uppercase tracking-widest text-sm">Portfolio</span>
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-black text-navy mt-2 uppercase italic tracking-tighter leading-none mb-8">Recent Transformations</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat
                    ? 'bg-navy text-white shadow-lg'
                    : 'bg-navy/5 text-navy/60 hover:bg-navy/10'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-3xl aspect-square bg-navy/5 cursor-pointer shadow-sm hover:shadow-2xl transition-all"
            >
              <img
                src={image.url}
                alt={image.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-lightAqua text-xs font-bold uppercase tracking-widest mb-1">{image.category}</span>
                <h4 className="text-white font-bold text-lg">{image.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
