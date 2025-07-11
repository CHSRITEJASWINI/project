import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'IIDT Intern',
      company: 'BLACKBUCKS PVT. LTD',
      duration: 'May 2024 - July 2024',
      location: 'Remote',
      description:
        'Gained experience in fundamentals of Artificial Intelligence, Machine Learning, and Data Science',
      skills: ['AI/ML/DS'],
    },
  ];

  const hackathons = [
    {
      name: 'VEGACODE 2K25 – National Level 24-Hour Hackathon',
      achievement:
        'Participated in a national-level hackathon organized by Dept. of CSE (AI&ML), RCE in collaboration with Brainovision Solutions & AICTE. Successfully completed and received participation certificate.',
      year: '21st – 22nd March 2025',
    },
    {
      name: 'MERN Full Stack Hackathon Quiz',
      achievement:
        'Participated in a quiz competition organized by Colgstack to demonstrate MERN stack development and problem-solving skills.',
      year: '20th May 2025',
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-8"></div>
        </motion.div>

        {/* Internships */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-2"
          >
            <Building className="text-teal-400" size={24} />
            Internships
          </motion.h3>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mb-6"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {exp.title}
                  </h4>
                  <p className="text-lg text-teal-400 font-medium mb-2">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col md:items-end text-sm text-gray-300">
                  <div className="flex items-center gap-1 mb-1">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-700 text-teal-300 rounded-full text-sm font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hackathons */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-2"
          >
            <Calendar className="text-teal-400" size={24} />
            Hackathons
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-slate-800 border-l-4 border-teal-500 p-6 rounded-r-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-white mb-2">
                  {hackathon.name}
                </h4>
                <p className="text-gray-300 mb-2">{hackathon.achievement}</p>
                <span className="text-sm text-teal-400 font-medium">
                  {hackathon.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
