import React from 'react';
import Image from 'next/image';
import { Code, Rocket, Users } from 'lucide-react';

const AboutMe: React.FC = () => {
  const skills = [
    { 
      name: 'Frontend Development', 
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] 
    },
    { 
      name: 'Backend Development', 
      technologies: ['Node.js', 'Flask', 'Django', 'Express', 'Laravel'] 
    },
    { 
      name: 'Cloud & DevOps', 
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'DigitalOcean'] 
    }
  ];

  return (
    <section className="py-16 md:py-10 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Portrait and Image Section */}
        <div className="flex justify-center items-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src="/amoschristmas2023.jpg"  // Replace with your actual portrait
              alt="Your Portrait"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-75"></div>
          </div>
        </div>

        {/* About Me Content */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold mb-4 text-white">
            About Me
          </h2>

          <div className="space-y-4 text-white/80 leading-relaxed">
            <p>
              I am a passionate Computer Science graduate from Jomo Kenyatta University of Agriculture and Technology, 
              where I developed a strong foundation in software engineering and innovative technology solutions.
            </p>

            <p>
              My journey is driven by a deep love for building robust, scalable products that empower businesses 
              to reach their full potential. I thrive on transforming complex challenges into elegant, 
              user-centric digital experiences that drive meaningful impact.
            </p>

            <div className="pt-4">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                My Core Skills
              </h3>

              <div className="grid md:grid-cols-3 gap-4">
                {skills.map((skillCategory, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800 p-4 rounded-lg border border-white/10 hover:bg-gray-800/50 transition-all"
                  >
                    <div className="flex items-center mb-2">
                      {index === 0 && <Code className="mr-2 text-blue-400" />}
                      {index === 1 && <Rocket className="mr-2 text-green-400" />}
                      {index === 2 && <Users className="mr-2 text-purple-400" />}
                      <h4 className="font-semibold text-white">{skillCategory.name}</h4>
                    </div>
                    <ul className="text-sm text-white/70 space-y-1">
                      {skillCategory.technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;