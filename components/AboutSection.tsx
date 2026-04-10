export function AboutSection() {
  return (
    <section id="about" className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-8">
      <div className="flex-shrink-0 mb-6 sm:mb-0">
        {/* Replace src with your real photo or avatar */}
        <img
          src="https://avatars.githubusercontent.com/u/465505?v=4"
          alt="Chirag Dodiya"
          width={120}
          height={120}
          className="avatar shadow-lg border border-gray-200"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-3">About Me</h2>
        <p className="text-gray-700 mb-2">
          A brief introduction to my background, skills, and what drives me.
        </p>
        <p>
          I’m a passionate software developer based in India, with a strong focus on building clean, efficient web applications and digital experiences. I thrive on solving real-world problems through creative code and thoughtful design, and I’m always looking for new opportunities to learn and grow.
        </p>
      </div>
    </section>
  );
}
export default AboutSection;