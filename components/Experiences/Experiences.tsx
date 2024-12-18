import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';

const ExperiencesComponent: React.FC = () => {
  const experiences = [
    {
      title: 'Lead Software Engineer',
      company: 'Greenlife Crop Protection Africa Ltd.',
      location: 'Nairobi, Kenya',
      period: 'Jun 2023 - Present',
      description: 'Led full-stack development of enterprise web applications, Mobile Application, USSD, implementing scalable microservices architecture and improving system performance by 40%.',
      technologies: ['React', 'USSD', 'AWS', 'Docker', 'Laravel', 'Redis', 'React Native', 'Typescript', 'PHP', 'WordPress' ]
    },
    {
      title: 'Frontend Software Developer',
      company: 'Weza Ventures',
      location: 'Nairobi, Kenya',
      period: 'Nov 2020 - Jun 2023',
      description: 'Developed and maintained responsive web frontend applications. The Weza Platform and Weza CRM',
      technologies: ['NextJs', 'React', 'Docker', 'Storybook']
    },
    {
      title: 'Software Engineering Intern',
      company: 'Attain Enterprise Solutions',
      location: 'Nairobi, Kenya',
      period: 'Oct 2019 - Mar 2020',
      description: 'Developed and maintained responsive web applications, collaborated with cross-functional teams to deliver innovative software solutions.',
      technologies: ['NextJs', 'React', 'Docker', 'PostgreSQL']
    },
    {
      title: 'Computer Science Student',
      company: 'Jomo Kenyatta University of Agriculture and Technology',
      location: 'Juja, Kenya',
      period: 'Sep 2014 - Aug 2019',
      description: 'Contributed to university research projects, developed prototype applications demonstrating innovative technological solutions.',
      technologies: ['Java', 'PHP', 'JavaScript', 'C', 'C++', 'Python', 'SDLC', 'Project Management']
    }
  ];

  return (
    <section className="py-16 md:py-10 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Professional Journey
        </h2>

        <div className="relative">
          {/* Responsive Timeline Container */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-white/10 h-full"></div>

          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="
                relative flex flex-col md:flex-row 
                md:even:flex-row-reverse 
                gap-6 mb-12 
                md:odd:pr-[10%] md:even:pl-[10%]
              "
            >
              {/* Timeline Dot - Only on Larger Screens */}
              <div 
                className="
                  hidden md:block absolute 
                  top-0 left-1/2 transform -translate-x-1/2 
                  w-5 h-5 rounded-full 
                  bg-gradient-to-br from-blue-500 to-purple-600
                  border-4 border-white/20
                  z-10
                "
              />

              {/* Experience Card */}
              <div 
                className="
                  flex-1 bg-gray-800/50 
                  border border-white/10 rounded-xl 
                  p-6 md:p-8
                  backdrop-blur-sm shadow-xl
                  transition-all duration-300 
                  hover:scale-[1.02] hover:border-white/20
                "
              >
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-white/70">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-white/60 text-sm">
                    <Briefcase size={16} className="mr-2" />
                    {exp.period}
                  </div>
                </div>

                <div className="flex items-center text-white/60 mb-4">
                  <MapPin size={16} className="mr-2" />
                  {exp.location}
                </div>

                <p className="text-white/80 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesComponent;