import React from 'react';

const skills = [
  {
    title: 'FRONTEND',
    items: [
      { name: 'Javascript', color: 'bg-yellow-300', icon: '🟨' },
      { name: 'Typescript', color: 'bg-blue-400', icon: '🟦' },
      { name: 'React', color: 'bg-cyan-400', icon: '⚛️' },
      { name: 'Next.Js', color: 'bg-gray-800', icon: '⏭️' },
      { name: 'Redux', color: 'bg-purple-500', icon: '🟪' },
      { name: 'Tailwind CSS', color: 'bg-blue-300', icon: '🌊' },
      { name: 'GSAP', color: 'bg-green-500', icon: '🦸' },
      { name: 'Framer Motion', color: 'bg-pink-400', icon: '🎞️' },
      { name: 'SASS', color: 'bg-pink-300', icon: '💅' },
      { name: 'Bootstrap', color: 'bg-purple-700', icon: '🅱️' },
    ],
  },
  {
    title: 'BACKEND',
    items: [
      { name: 'Node.Js', color: 'bg-green-600', icon: '🟩' },
      { name: 'Nest.Js', color: 'bg-red-500', icon: '🟥' },
      { name: 'Express.Js', color: 'bg-gray-700', icon: '⬛' },
    ],
  },
  {
    title: 'DATABASE',
    items: [
      { name: 'MySQL', color: 'bg-blue-500', icon: '🐬' },
      { name: 'PostgreSQL', color: 'bg-blue-800', icon: '🐘' },
      { name: 'Prisma', color: 'bg-gray-400', icon: '🔺' },
    ],
  },
  {
    title: 'TOOLS',
    items: [
      { name: 'Git', color: 'bg-orange-500', icon: '🔸' },
      { name: 'Docker', color: 'bg-blue-600', icon: '🐳' },
      { name: 'AWS', color: 'bg-yellow-400', icon: '☁️' },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-10">My Stack</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
      {skills.map((group) => (
        <div key={group.title}>
          <h3 className="text-xl font-bold mb-4 text-gray-200">{group.title}</h3>
          <ul className="space-y-2">
            {group.items.map((item) => (
              <li key={item.name} className="flex items-center gap-3">
                <span className={`inline-block w-7 h-7 rounded-full flex items-center justify-center text-lg ${item.color}`}>{item.icon}</span>
                <span className="text-gray-300">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills; 