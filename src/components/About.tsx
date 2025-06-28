import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Paintbrush, Cloud } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Proficient in both front-end and back-end technologies',
    },
    {
      icon: Brain,
      title: 'AI & Data Science',
      description: 'Specialized in artificial intelligence and data analysis',
    },
    {
      icon: Paintbrush,
      title: 'UI/UX Design',
      description: 'Focus on intuitive and accessible user experience design',
    },
    {
      icon: Cloud,
      title: 'Machine Learning',
      description: 'Experience building predictive models using supervised and unsupervised learning techniques',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-300">
            I'm a passionate B.Tech student specializing in Artificial Intelligence and Data Science, 
            with a strong foundation in full stack web development. I enjoy building scalable, user-friendly 
            applications and applying AI concepts to real-world problems. I am constantly exploring UI/UX design, 
            cloud deployment, and DevOps tools to enhance both functionality and performance in my projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="bg-slate-800/70 p-6 rounded-2xl backdrop-blur-md hover:shadow-lg hover:shadow-teal-400/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-4">
                <item.icon size={24} className="text-teal-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
