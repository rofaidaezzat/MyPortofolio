type ExperienceType = {
  company: string;
  role: string;
  date: string;
  description: string[];
};

const EXPERIENCES_DATA: ExperienceType[] = [
  {
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    role: "Freelance Frontend Developer",
    date: "Oct 2024 – Jun 2025",
    description: [
      "Worked on real-world projects as part of a national digital transformation initiative.",
      "Developed web interfaces using React.js and collaborated in a team environment.",
      "Enhanced skills in teamwork, communication, and solving real project challenges.",
    ],
  },
  {
    company: "Information Technology Institute (ITI)",
    role: "Frontend Intern",
    date: "Aug 2024",
    description: [
      "Completed a 1-month internship focused on modern frontend development.",
      "Built responsive interfaces using HTML, CSS, Bootstrap, TypeScript, and React.",
      "Practiced React fundamentals: components, props, state, and hooks.",
    ],
  },
  {
    company: "Manara",
    role: "Frontend Certification Program",
    date: "2025",
    description: [
      "Completed a structured learning program focused on professional frontend development.",
      "Learned through mentorship and real-world examples.",
    ],
  },
  {
    company: "Udemy",
    role: "Engineering Frontend Course",
    date: "2025",
    description: [
      'Completed the "Engineering Frontend" course and earned a certificate.',
      "Gained deeper insights into building scalable, maintainable frontend applications.",
    ],
  },
];

const ExperienceItem = ({ experience }: { experience: ExperienceType }) => (
  <div className="border-l-4 border-green-400 pl-6">
    <div className="text-lg font-bold text-white">{experience.company}</div>
    <div className="text-2xl font-extrabold text-gray-100 mb-1">
      {experience.role}
    </div>
    <div className="text-gray-400 text-sm mb-2">{experience.date}</div>

    {experience.description && (
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        {experience.description.map((line, lineIndex) => (
          <li key={lineIndex}>{line}</li>
        ))}
      </ul>
    )}
  </div>
);

const Experience = () => (
  <section id="experience" className="py-20 px-4 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-10">My Experience</h2>
    <div className="space-y-8">
      {EXPERIENCES_DATA.map((experience) => (
        <ExperienceItem key={experience.company} experience={experience} />
      ))}
    </div>
  </section>
);

export default Experience;
