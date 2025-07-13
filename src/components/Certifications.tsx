import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'SQL - Basic to Advanced',
      issuer: 'aajhub',
      date: '2025-Apr',
      description: 'Covers SQL fundamentals to advanced querying and database concepts.'
    },
    {
      title: 'Cloud Computing',
      issuer: 'Simplilearn',
      date: '2024-Oct',
      description: 'Covers cloud architecture, deployment models, and services like IaaS, PaaS, and SaaS.'
    },
    {
      title: 'C Programming',
      issuer: 'Coursera',
      date: '2023-Jan',
      description: 'In-depth understanding of C language, memory management, and procedural programming.'
    },
    {
      title: 'Python',
      issuer: 'Simplilearn',
      date: '2024-Oct',
      description: 'Advanced Python concepts including OOP, file handling, and data structures.'
    },
    {
      title: 'Natural Language Processing (NLP)',
      issuer: 'Simplilearn',
      date: '2024-July',
      description: 'Text preprocessing, sentiment analysis, and machine learning for language data.'
    },
    {
      title: 'Introduction to Artificial Intelligence',
      issuer: 'Simplilearn',
      date: '2024 -Feb',
      description: 'Overview of AI concepts including search algorithms, logic, and neural networks.'
    },
    {
      title: 'Sorting Algorithms',
      issuer: 'Simplilearn',
      date: '2024-Jan',
      description: 'Detailed learning of sorting techniques like quicksort, mergesort, and more.'
    },
    {
      title: 'Continuous Integration & Delivery – DevOps',
      issuer: 'Infosys Springboard',
      date: '2024-August',
      description: 'DevOps pipeline, CI/CD tools, and automation practices.'
    },
    {
      title: 'HTML5',
      issuer: 'Infosys Springboard',
      date: '2025-Jan',
      description: 'Semantic HTML5, media support, and form enhancements for modern web development.'
    },
    {
    title: 'Introduction to Data Science',
    issuer: 'Infosys Springboard',
    date: '2025-Apr',
    description: 'Covers basics of data science including statistics, data exploration, and data visualization techniques.'
  },

  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-300 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-400"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                  <Award size={24} className="text-white" />
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <Calendar size={16} />
                  <span>{cert.date}</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {cert.title}
              </h3>

              <p className="text-blue-300 font-medium mb-3">
                {cert.issuer}
              </p>

              <p className="text-gray-300 text-sm">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Certifications;
