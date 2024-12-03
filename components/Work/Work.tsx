"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

const WorkProjects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with advanced inventory management and payment integration.',
      technologies: ['ReactJs', 'TypeScript', 'MPesa Integration', 'PostgreSQL', 'Expo', 'Laravel', 'Docker', 'AWS', 'USSD'],
      image: '/ecom.jpg',
      githubLink: 'https://github.com/mohraf/ecommerce-project',
      liveLink: 'https://your-ecommerce-site.com',
      category: 'Full Stack'
    },
    {
      title: 'Supermarket sales prediction Web App',
      description: 'Machine learning-powered recommendation system for personalized content suggestions.',
      technologies: ['Python', 'Scikit Learn', 'Pandas', 'Django'],
      image: '/sales.jpg',
      githubLink: 'https://github.com/mohraf/ai-recommendation',
      liveLink: 'https://ai-recommendation-demo.com',
      category: 'Machine Learning'
    },
    {
      title: 'Real-time Chat Application',
      description: 'Scalable real-time messaging platform with end-to-end encryption.',
      technologies: ['Node.js', 'Socket.io', 'React', 'WebRTC'],
      image: '/chatbot.jpg',
      githubLink: 'https://github.com/mohraf/chat-app',
      liveLink: 'https://your-chat-app.com',
      category: 'Web App'
    }
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-16 md:py-10 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-white/70 max-w-xl mx-auto">
            A collection of innovative projects that demonstrate my skills in solving complex problems and creating impactful solutions.
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex justify-center mb-12 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeFilter === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 text-white/70 hover:bg-gray-700'}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="
                bg-gray-800/50 rounded-xl overflow-hidden 
                border border-white/10 
                transform transition-all duration-300 
                hover:scale-[1.03] hover:border-white/20
                hover:shadow-xl group
              "
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="
                        px-3 py-1 rounded-full 
                        bg-white/10 text-xs 
                        text-white/80
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <Link 
                    href={project.githubLink}
                    target="_blank"
                    className="
                      flex items-center text-white/70 hover:text-white
                      transition-colors duration-300
                    "
                  >
                    <Github className="mr-2" />
                    GitHub
                  </Link>
                  <Link 
                    href={project.liveLink}
                    target="_blank"
                    className="
                      flex items-center text-white/70 hover:text-white
                      transition-colors duration-300
                    "
                  >
                    <ExternalLink className="mr-2" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProjects;