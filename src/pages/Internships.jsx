import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const Internships = () => {
  const internships = [
    {
      id: 1,
      company: 'MotionCut Technologies',
      position: 'Web Developer Intern',
      duration: 'Jan 2025 - Feb 2025',
      location: 'Remote',
      description: 'Developed responsive web applications using React.js and modern CSS frameworks. Collaborated with senior developers on client projects and gained experience in agile development methodologies.',
      achievements: [
        'Built 3 responsive landing pages that increased user engagement by 40%',
        'Implemented accessibility features improving WCAG compliance',
        'Optimized page load times by 30% through code optimization',
      ],
      skills: ['React.js', 'JavaScript', 'CSS3', 'HTML5'],
      featured: true,
    },
    {
      id: 2,
      company: 'Cognifyz Technologies',
      position: 'Frontend Development Intern',
      duration: 'Mar 2025 - Apr 2025',
      location: 'Remote',
      description: 'Assisted in the development of client websites and web applications. Gained hands-on experience with modern web development tools and frameworks.',
      achievements: [
        'Contributed to 5+ client projects using HTML, CSS, and JavaScript',
        'Learned version control with Git and collaborative development workflows',
        'Participated in code reviews and followed industry best practices',
      ],
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Git'],
    },
    {
      id: 3,
      company: 'Code Alpha',
      position: 'Web Developer Intern',
      duration: 'May 2025 - Jun 2025',
      location: 'Remote',
      description: 'Worked on the company\'s main website redesign project. Focused on creating responsive designs and improving user experience.',
      achievements: [
        'Redesigned company website with modern, mobile-first approach',
        'Reduced page load times by implementing lazy loading and optimization techniques',
        'Created reusable component library for consistent UI elements',
      ],
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    },
  ];

  const getSkillColor = (skill) => {
    const colors = {
      'HTML5': 'bg-orange-100 text-orange-800',
      'CSS3': 'bg-blue-100 text-blue-800',
      'JavaScript': 'bg-yellow-100 text-yellow-800',
      'React.js': 'bg-cyan-100 text-cyan-800',
      'Git': 'bg-gray-100 text-gray-800',
      'Responsive Design': 'bg-purple-100 text-purple-800',
    };
    return colors[skill] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Internships & Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My journey through various internships and learning experiences in web development
          </p>
        </div>

        {/* Featured Internship */}
        {internships.filter(internship => internship.featured).map((internship) => (
          <div key={internship.id} className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-white/20 rounded-full px-4 py-2">
                  <span className="text-white font-semibold text-sm">Featured Experience</span>
                </div>
                <Award className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">{internship.position}</h2>
              <h3 className="text-xl text-blue-100 mb-4">{internship.company}</h3>
              <div className="flex flex-wrap items-center text-blue-100 space-x-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{internship.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>{internship.location}</span>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {internship.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {internship.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getSkillColor(skill)}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other Internships */}
        <div className="grid md:grid-cols-2 gap-8">
          {internships.filter(internship => !internship.featured).map((internship, index) => (
            <div
              key={internship.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{internship.position}</h3>
                    <h4 className="text-lg text-blue-600 font-semibold">{internship.company}</h4>
                  </div>
                  <Briefcase className="h-8 w-8 text-gray-400" />
                </div>
                
                <div className="flex flex-col space-y-2 text-gray-500 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{internship.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{internship.location}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {internship.description}
                </p>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Achievements</h5>
                  <ul className="space-y-1">
                    {internship.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2 py-1 rounded-md text-xs font-medium ${getSkillColor(skill)}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">Experience Summary</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '3', label: 'Internships Completed', icon: Briefcase },
              { number: '8+', label: 'Projects Built', icon: Award },
              { number: '6', label: 'Months Experience', icon: Calendar },
              { number: '4', label: 'Technologies Mastered', icon: Award },
            ].map((stat, index) => (
              <div key={stat.label} className="space-y-3">
                <stat.icon className="h-8 w-8 mx-auto text-blue-200" />
                <div className="text-3xl font-bold">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internships;