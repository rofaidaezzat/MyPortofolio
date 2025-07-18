// 1. تعريف أنواع البيانات
type SkillItemType = {
  name: string;
  color: string;
  icon: string;
};

type SkillGroupType = {
  title: string;
  items: SkillItemType[];
};

// 2. البيانات
const SKILLS_DATA: SkillGroupType[] = [
  {
    title: "FRONTEND",
    items: [
      { name: "HTML", color: "bg-orange-500", icon: "🔤" },
      { name: "CSS", color: "bg-blue-500", icon: "🎨" },
      { name: "JavaScript", color: "bg-yellow-300", icon: "🟨" },
      { name: "TypeScript", color: "bg-blue-600", icon: "🔷" },
      { name: "React", color: "bg-sky-400", icon: "⚛️" },
      { name: "Next.js", color: "bg-gray-800", icon: "⏭️" },
      { name: "Redux", color: "bg-purple-500", icon: "📦" },
      { name: "Tailwind CSS", color: "bg-cyan-400", icon: "🌬️" },
      { name: "Bootstrap", color: "bg-purple-600", icon: "🅱️" },
      { name: "jQuery", color: "bg-indigo-500", icon: "💡" },
    ],
  },
  {
    title: "PROGRAMMING LANGUAGES",
    items: [
      { name: "Java", color: "bg-red-500", icon: "☕" },
      { name: "Go", color: "bg-teal-500", icon: "🐹" },
      { name: "Python", color: "bg-yellow-500", icon: "🐍" },
    ],
  },
  {
    title: "COMPUTER SCIENCE",
    items: [
      { name: "OOP", color: "bg-pink-500", icon: "📦" },
      { name: "Data Structures", color: "bg-green-500", icon: "🌲" },
      { name: "Algorithms", color: "bg-yellow-600", icon: "📐" },
      { name: "Operating Systems", color: "bg-gray-700", icon: "🖥️" },
      { name: "Computer Networks", color: "bg-indigo-600", icon: "🌐" },
      { name: "Databases", color: "bg-blue-800", icon: "💾" },
      { name: "AI & Machine Learning", color: "bg-purple-700", icon: "🤖" },
    ],
  },
  {
    title: "BASICS IN BACKEND",
    items: [
      { name: "Node.js", color: "bg-green-600", icon: "🌿" },
      { name: "REST APIs", color: "bg-blue-400", icon: "🔗" },
      { name: "MongoDB", color: "bg-green-700", icon: "🍃" },
      { name: "SQL", color: "bg-orange-600", icon: "🗃️" },
    ],
  },
  {
    title: "TOOLS & PRACTICES",
    items: [
      { name: "Git", color: "bg-orange-500", icon: "🧰" },
      { name: "GitHub", color: "bg-black", icon: "🐙" },
      { name: "Figma", color: "bg-pink-400", icon: "🎨" },
      { name: "Linux/Windows CLI", color: "bg-gray-600", icon: "💻" },
      { name: "Agile/Scrum", color: "bg-blue-500", icon: "🌀" },
      { name: "Testing & Debugging", color: "bg-red-400", icon: "🧪" },
    ],
  },
];

// 3. مكون لكل عنصر مهارة
const SkillItem = ({ item }: { item: SkillItemType }) => (
  <li className="flex items-center gap-3">
    <span
      className={`inline-block w-7 h-7 rounded-full flex items-center justify-center text-lg ${item.color}`}
    >
      {item.icon}
    </span>
    <span className="text-gray-300">{item.name}</span>
  </li>
);

// 4. مكون مجموعة المهارات
const SkillGroup = ({ group }: { group: SkillGroupType }) => (
  <div className="bg-gray-800 p-4 rounded shadow">
    <h3 className="text-xl font-bold mb-4 text-green-400">{group.title}</h3>
    <ul className="space-y-2">
      {group.items.map((item, index) => (
        <SkillItem key={index} item={item} />
      ))}
    </ul>
  </div>
);

// 5. المكون الرئيسي
const Skills = () => (
  <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-10 text-center">My Stack</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
      {SKILLS_DATA.map((group) => (
        <SkillGroup key={group.title} group={group} />
      ))}
    </div>
  </section>
);

export default Skills;
