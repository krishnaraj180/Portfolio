import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Home = () => {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-teal-500/10 to-purple-600/10"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-teal-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              Krishnaraj
            </h1>
            <h3 className='text-5xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-teal-600 to-purple-600 bg-clip-text text-transparent leading-tight'>
               Web Developer
               </h3>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Creating beautiful, responsive, and user-friendly web experiences with modern technologies
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
                <span>View My Work</span>
                <ArrowDown className="h-5 w-5" />
              </button>
              
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {[
                { icon: Github, href: 'https://github.com/krishnaraj180', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/krishnaraj-r-996871305', label: 'LinkedIn' },
                { icon: Mail, href: 'krishnarajr180@gmail.com', label: 'Email' },
              ].map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-200 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <social.icon className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="h-8 w-8 text-blue-600" />
        </button>
      </section>

      {/* Skills Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technologies I Work With
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate about creating exceptional web experiences using modern technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'HTML5', color: 'from-orange-500 to-red-500' },
              { name: 'CSS3', color: 'from-blue-500 to-blue-600' },
              { name: 'JavaScript', color: 'from-yellow-400 to-yellow-500' },
              { name: 'React.js', color: 'from-cyan-400 to-blue-500' },
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center border border-gray-100"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                  <span className="text-2xl font-bold text-white">
                    {tech.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;