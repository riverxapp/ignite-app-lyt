const projects = [
  {
    title: "Modern Portfolio Site",
    description: "A fully responsive, accessible personal portfolio template using React, Next.js, and Tailwind.",
    link: "https://github.com/chiragdodiya/modern-portfolio",
  },
  {
    title: "AI Blog Platform",
    description: "Blogging platform with markdown support, AI-powered summaries, and clean light/dark UI.",
    link: "https://github.com/chiragdodiya/ai-blog",
  },
  {
    title: "Startup Landing Page",
    description: "Conversion-focused landing page theme for SaaS startups, built for speed and clarity.",
    link: "https://github.com/chiragdodiya/startup-landing",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-3">Projects</h2>
      <p className="text-gray-700 mb-6">Showcasing my most impactful work that demonstrates my skills and dedication.</p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.title} className="card flex flex-col h-full">
            <div className="mb-3">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
            <div className="mt-auto">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="section-link"
                aria-label={`View ${project.title}`}
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default ProjectsSection;