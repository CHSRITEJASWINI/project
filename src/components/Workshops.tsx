import React from 'react';
import { motion } from 'framer-motion';
import { Presentation, Calendar } from 'lucide-react';

const workshops = [
  {
    title: 'Build Your Own AI Agent Workshop',
    issuer: 'Think Mates',
    date: '21 June 2025',
    description:
      'Participated in a 1-hour hands-on online workshop designed to empower participants to create intelligent, autonomous AI agents using no-code/low-code tools.',
  },
  {
    title: '3-Day Web Designing Workshop',
    issuer: 'Ramachandra College of Engineering',
    date: 'March 2023',
    description:
      'Attended a 3-day intensive workshop focused on HTML, CSS, and responsive design principles using modern web development tools.',
  },
  {
    title: 'International Workshop on Data Science using Python',
    issuer: 'BrainoVision',
    date: 'Feb 2024',
    description:
      'Participated in an international-level workshop that focused on key concepts in Data Science, data handling with Python, and real-world project insights.',
  }
];

const Workshops = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Workshops
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Practical hands-on learning sessions to build real-world skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl border-l-4 border-blue-500 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                  <Presentation size={24} className="text-white" />
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <Calendar size={16} />
                  <span>{workshop.date}</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {workshop.title}
              </h3>
              <p className="text-blue-300 font-medium mb-2">
                {workshop.issuer}
              </p>
              <p className="text-gray-300 text-sm">{workshop.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
