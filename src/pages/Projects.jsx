import React from 'react';
import { ExternalLink, Github, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce website built with React, featuring product catalog, shopping cart, and payment integration.',
      technologies: ['React.js', 'CSS3', 'JavaScript', 'HTML5'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      liveUrl: '#',
      githubUrl: 'https://github.com/krishnaraj180/E-commerce-web-page',
      featured: true,
    },
    {
      id: 2,
      title: 'Portfolio Dashboard',
      description: 'A responsive admin dashboard for managing portfolio content with data visualization and content management.',
      technologies: ['React.js', 'JavaScript', 'CSS3'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      liveUrl: '#',
      githubUrl: 'https://github.com/krishnaraj180/Portfolio-Dashboard.git',
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'A beautiful weather application with real-time data, forecasts, and location-based services.',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'EventHub Booking Platform',
      description: 'A collaborative task management application with real-time updates and team features.',
      technologies: ['React.js', 'JavaScript', 'CSS3'],
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
      liveUrl: '#',
      githubUrl: 'https://github.com/krishnaraj180/EventHub-Booking-platform-',
    },
    
  ];

  const getTechColor = (tech) => {
    const colors = {
      'HTML5': 'bg-orange-100 text-orange-800',
      'CSS3': 'bg-blue-100 text-blue-800',
      'JavaScript': 'bg-yellow-100 text-yellow-800',
      'React.js': 'bg-cyan-100 text-cyan-800',
    };
    return colors[tech] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my web development projects, demonstrating my skills in HTML, CSS, JavaScript, and React.js
          </p>
        </div>

        {/* Featured Project */}
        {projects.filter(p => p.featured).map((project) => (
          <div key={project.id} className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 hover:shadow-2xl transition-shadow duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 lg:h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    <Globe className="h-5 w-5" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-200"
                  >
                    <Github className="h-5 w-5" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded-md text-xs font-medium ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on interesting projects.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;