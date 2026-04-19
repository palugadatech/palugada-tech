import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Code, Rocket } from 'lucide-react';

const Workflow = () => {
  const steps = [
    {
      icon: <MessageSquare size={24} />,
      title: "Konsultasi",
      description: "Ngobrol santai seputar kebutuhan, target pasar, dan budget bisnis Anda via WhatsApp.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <PenTool size={24} />,
      title: "Draft Desain",
      description: "Kami buatkan tampilan kasar (UI/UX) untuk Anda setujui sebelum masuk tahap coding.",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: <Code size={24} />,
      title: "Development",
      description: "Proses koding website yang bersih, cepat, dan responsif menggunakan teknologi terbaru.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Rocket size={24} />,
      title: "Launch & Support",
      description: "Website live di domain Anda dan kami berikan panduan cara mengelola kontennya.",
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <section id="workflow" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proses Kerja Transparan</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Tidak ada kejutan biaya atau proses yang rumit. Kami bekerja secara efisien agar website Anda cepat selesai.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center lg:text-left"
              >
                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 mx-auto lg:mx-0 shadow-sm relative z-10`}>
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center text-xs font-bold text-slate-400">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
