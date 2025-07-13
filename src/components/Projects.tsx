import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'My Portfolio Website [2025-June]',
      description:
        'A personal portfolio built with React.js and Tailwind CSS. Showcases projects, resume, and contact. Fully responsive and animated.',
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
 // Portfolio image
      github: 'https://github.com/yourusername/your-portfolio',
      demo: 'https://your-portfolio.vercel.app'
    },
    {
      title: 'Disaster Management Web App [2025]',
      description:
        'Full-stack MERN app to manage disaster alerts, resource tracking, and emergency coordination. Real-time updates and secure routes included.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      image:'https://images.pexels.com/photos/7568661/pexels-photo-7568661.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/yourusername/disaster-management',
      demo: 'https://disaster-management-demo.vercel.app'
    },
    {
      title: 'Food Waste Management System [HTML/CSS/JS]',
      description:
        'A front-end website that tracks near-expiry food items from stores and connects them to donation or discounted sales. Built using HTML, CSS, and JS.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image:
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800', // Food Waste image
      github: 'https://github.com/yourusername/food-waste-project',
      demo: 'https://food-waste-demo.vercel.app'
    },
     {
    title: 'Employee Management System [Python]',
    description:
      'A command-line Python application to perform CRUD operations (Create, Read, Update, Delete) on employee records. It uses file handling and object-oriented programming.',
    technologies: ['Python', 'File Handling', 'OOP', 'CRUD'],
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/yourusername/employee-management-system',
    demo: 'https://replit.com/@yourusername/employee-management-demo' // optional
  },
  {
  title: 'Restaurant Management Page [Azure Deployment]',
  description:
    'A basic restaurant management interface built with HTML, CSS, and JavaScript. Deployed on Microsoft Azure after learning Azure Fundamentals (AZ-900).',
  technologies: ['HTML', 'CSS', 'JavaScript', 'Azure'],
  image:
    'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
  github: 'https://github.com/yourusername/restaurant-management',
  demo: 'https://your-azure-app-url.azurewebsites.net'
},
{
  title: 'Student Management System [Python]',
  description:
    'A command-line Python project that manages student records including adding, updating, deleting, and viewing details. It uses file handling and OOP principles.',
  technologies: ['Python', 'OOP', 'File Handling', 'CRUD'],
  image: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800',
  github: 'https://github.com/yourusername/student-management-system',
  demo: 'https://replit.com/@yourusername/student-management-demo'
},{
  title: 'Contact Book [Python]',
  description:
    'A simple contact book application built using Python. It allows users to add new contacts, view all contacts, and see detailed information of each contact. Uses file handling and object-oriented concepts.',
  technologies: ['Python', 'File Handling', 'OOP', 'CLI'],
  image: 'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=800',
  github: 'https://github.com/yourusername/contact-book-python',
  demo: 'https://replit.com/@yourusername/contact-book-demo'
}



  ];

  return (
    <section
      id="projects"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack and front-end web development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3 tracking-wide font-sans">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors duration-200"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors duration-200"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
