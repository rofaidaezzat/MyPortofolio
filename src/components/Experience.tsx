import React from 'react';

const experiences = [
  {
    company: 'Strativ AB',
    role: 'Software Engineer (Frontend)',
    date: 'Dec 2024 - Present',
  },
  {
    company: 'Epikcoders',
    role: 'Frontend Developer',
    date: 'Oct 2023 - Nov 2024',
  },
  {
    company: 'Anchorblock Technology',
    role: 'Frontend Engineer',
    date: 'Oct 2022 - Sep 2023',
  },
];

const Experience = () => (
  <section id="experience" className="py-20 px-4 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-10">My Experience</h2>
    <div className="space-y-8">
      {experiences.map((exp, idx) => (
        <div key={idx} className="border-l-4 border-green-400 pl-6">
          <div className="text-lg font-bold text-white">{exp.company}</div>
          <div className="text-2xl font-extrabold text-gray-100 mb-1">{exp.role}</div>
          <div className="text-gray-400 text-sm">{exp.date}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience; 