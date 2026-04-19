import React from 'react';
import { Badge } from '../ui/badge';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Sembako Makmur Jaya",
      category: "Toko Online",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
      tag: "UMKM"
    },
    {
      title: "GlowUp Skincare",
      category: "Landing Page",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800",
      tag: "Sales"
    },
    {
      title: "Law Firm Pratama",
      category: "Company Profile",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
      tag: "Branding"
    },
    {
      title: "Batik Solo Artisan",
      category: "E-Catalog",
      image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=800",
      tag: "UMKM"
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hasil Kerja Nyata Kami</h2>
            <p className="text-slate-600 max-w-xl">
              Lihat bagaimana kami membantu bisnis-bisnis lokal bertransformasi dan menjangkau lebih banyak pelanggan secara digital.
            </p>
          </div>
          <Badge variant="outline" className="px-4 py-1.5 border-primary text-primary text-sm font-semibold">
            Koleksi Project Terpilih
          </Badge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex items-center gap-2 text-white font-medium">
                    Lihat Demo <ExternalLink size={16} />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-slate-900 hover:bg-white">{project.tag}</Badge>
                </div>
              </div>
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="text-slate-500 text-sm">{project.category}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 italic">
            "Mau dibuatkan website sekeren ini untuk bisnis kamu?"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
