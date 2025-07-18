type LinkType = {
  name: string;
  url: string;
};

const SOCIAL_LINKS: LinkType[] = [
  {
    name: "Github",
    url: "https://github.com/rofaidaezzat",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/rofaida-azzat/",
  },
  {
    name: "Facebook",
    url: "#",
  },
];

const EMAIL = "rofaidaazzat123@gmail.com";

const SocialLink = ({ name, url }: LinkType) => (
  <a
    href={url}
    target={url !== "#" ? "_blank" : undefined}
    rel={url !== "#" ? "noopener noreferrer" : undefined}
    className="hover:text-green-400 transition"
  >
    {name}
  </a>
);

const Contact = () => (
  <section id="contact" className="py-20 px-4 max-w-2xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

    <p className="text-lg text-gray-300 mb-4">
      Feel free to reach out for collaborations or just a friendly hello 👋
    </p>

    <a
      href={`mailto:${EMAIL}`}
      className="inline-block bg-green-400 text-gray-900 font-bold px-8 py-3 rounded shadow hover:bg-green-300 transition mb-4"
    >
      {EMAIL}
    </a>

    <div className="flex justify-center gap-6 mt-6">
      {SOCIAL_LINKS.map((link) => (
        <SocialLink key={link.name} {...link} />
      ))}
    </div>
  </section>
);

export default Contact;
