import React from 'react';

const projects = [
  {
    name: 'MTI Electronics',
    stack: ['Next.js', 'Payload CMS', 'Tailwind CSS'],
    img: '',
  },
  {
    name: 'Epikcart',
    stack: ['React', 'Redux', 'React i18n'],
    img: '',
  },
  {
    name: 'Resume Roaster',
    stack: ['GPT-4', 'Next.js', 'Postgresql'],
    img: '',
  },
  {
    name: 'Real Estate',
    stack: ['React.js', 'Redux', 'Tailwind CSS'],
    img: '',
  },
  {
    name: 'Consulting Finance',
    stack: ['HTML', 'CSS & SCSS', 'Javascript'],
    img: '',
  },
  {
    name: 'devLinks',
    stack: ['Formik', 'Drag & Drop'],
    img: '',
  },
];

const Projects = () => (
  <section id="projects" className="py-20 px-4 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-10">Selected Projects</h2>
    <div className="space-y-8">
      {projects.map((project, idx) => (
        <div key={project.name} className="flex flex-col md:flex-row md:items-center gap-6 border-b border-gray-800 pb-6">
          <div className="flex-1">
            <div className="text-2xl font-extrabold text-white mb-1">{String(idx + 1).padStart(2, '0')}. {project.name}</div>
            <div className="flex flex-wrap gap-2 text-sm text-gray-400 mb-2">
              {project.stack.map((tech) => (
                <span key={tech} className="bg-gray-800 px-2 py-1 rounded">{tech}</span>
              ))}
            </div>
          </div>
          <div className="w-40 h-24 bg-gray-700 rounded-lg flex items-center justify-center text-gray-500">
            {/* Placeholder for project image */}
            <span>Preview</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 