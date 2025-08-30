import React from 'react';
import { User, Award, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate web developer dedicated to creating exceptional digital experiences
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <User className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Who I Am</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
               I am a passionate web developer specializing in crafting responsive, interactive websites and applications. With experience in HTML, CSS, JavaScript, and modern frameworks, I enjoy blending technical skill with creative design. Whether working on sleek portfolios or dynamic e-commerce platforms, I strive for clean code and seamless user experiences. Outside of coding, I love learning new tools and finding innovative ways to solve problems.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-teal-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">My Goals</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
               My main goal is to showcase my expertise as a web developer by presenting a collection of my best projects and skills. I aim to connect with forward-thinking clients and companies looking for creative, reliable solutions. Through my portfolio, I strive to build my professional brand, demonstrate my commitment to learning new technologies, and create opportunities for meaningful collaborations.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Skills & Expertise</h2>
              </div>
              <div className="space-y-4">
                {[
                  { skill: 'HTML5 & Semantic Markup', level: 95 },
                  { skill: 'CSS3 & Responsive Design', level: 90 },
                  { skill: 'JavaScript (ES6+)', level: 88 },
                  { skill: 'React.js & Modern Frameworks', level: 85 },
                ].map((item, index) => (
                  <div key={item.skill} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">{item.skill}</span>
                      <span className="text-sm text-gray-500">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${item.level}%`, animationDelay: `${index * 200}ms` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-red-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">What Drives Me</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
            Building for the web lets me combine creativity and problem-solving, two things I love. I’m driven by the challenge of transforming ideas into interactive, accessible digital experiences that make users’ lives easier and more enjoyable. The thrill of learning new technologies, pushing the boundaries of design, and collaborating with others inspires my best work every day. Each project is an opportunity to grow as a developer and deliver results that make a real difference.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">My Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'I believe in writing clean, maintainable code that stands the test of time.',
              },
              {
                title: 'User-Centric',
                description: 'Every decision I make is guided by creating the best possible user experience.',
              },
              {
                title: 'Continuous Learning',
                description: 'The web evolves rapidly, and I stay current with the latest technologies and best practices.',
              },
            ].map((value, index) => (
              <div key={value.title} className="text-center">
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-blue-100 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;