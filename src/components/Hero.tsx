import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/CHSRITEJASWINI',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sritejaswini-ch',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:chsritejaswini@gmail.com',
      label: 'Email',
      tooltip: 'chsritejaswini@gmail.com'
    }
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
              className="w-32 h-32 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl"
            >
              <span className="text-4xl font-bold text-white">T</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Sri Tejaswini
              <span className="block text-teal-400">Chundru</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              B.Tech in Artificial Intelligence and Data Science
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Passionate web development enthusiast eager to apply front-end and back-end skills in real-world
              projects. Aspiring to join a dynamic team where I can contribute to building innovative web applications
              while continuously learning and growing as a developer.
            </motion.p>
          </motion.div>

          {/* ✅ ONLY Get In Touch Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-6 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="relative group w-12 h-12 bg-slate-700 rounded-full shadow-lg flex items-center justify-center text-gray-200 hover:text-white hover:shadow-xl transition-all duration-200"
              >
                <social.icon size={20} />
                {social.tooltip && (
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gray-900 text-white text-sm px-2 py-1 rounded">
                    {social.tooltip}
                  </span>
                )}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
