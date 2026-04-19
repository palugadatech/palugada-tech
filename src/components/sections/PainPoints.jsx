import React from 'react';
import { Card, CardContent } from '../ui/card';
import { motion } from 'framer-motion';
import { Frown, ShieldAlert, ZapOff } from 'lucide-react';

const PainPoints = () => {
  const points = [
    {
      icon: <Frown className="text-red-500" size={32} />,
      title: "Jualan Cuma Lewat WA?",
      description: "Ribet ngatur stok, jawab pertanyaan yang sama berulang kali, dan susah rekap orderan manual."
    },
    {
      icon: <ShieldAlert className="text-orange-500" size={32} />,
      title: "Kurang Dipercaya Pelanggan",
      description: "Tanpa website resmi, calon pembeli sering ragu apakah bisnis Anda beneran terpercaya atau cuma iseng."
    },
    {
      icon: <ZapOff className="text-yellow-500" size={32} />,
      title: "Website Lama Lemot?",
      description: "Punya website tapi susah diupdate sendiri atau lemot banget pas dibuka? Itu bikin pelanggan kabur!"
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bingung Bisnis Belum Punya Website?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Jangan biarkan bisnis Anda tertinggal. Kami paham kesulitan yang Anda alami dalam mengelola operasional digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-none shadow-sm hover:shadow-md transition-shadow h-full">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 inline-flex p-4 bg-white rounded-2xl shadow-sm">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-primary">
            "Tenang, palugada.tech solusinya. Kami urus semuanya: Desain, Coding, sampai Live!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
