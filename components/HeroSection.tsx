import Link from "next/link";

export function HeroSection() {
  return (
    <section className="max-w-5xl mx-auto text-center flex flex-col items-center pt-16 pb-10" id="hero">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
        Hi, I’m Chirag Dodiya — Crafting Code and Creativity
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        Software developer and problem solver specializing in clean, efficient web applications.
      </p>
      <div className="flex gap-4 justify-center">
        <a href="#contact" className="btn-primary">Get in Touch</a>
        <a href="#projects" className="btn-secondary">View Projects</a>
      </div>
    </section>
  );
}

export default HeroSection;