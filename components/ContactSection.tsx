export function ContactSection() {
  return (
    <section id="contact" className="max-w-2xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-3">Contact</h2>
      <p className="text-gray-700 mb-6">
        Let’s connect! Reach out for collaboration, opportunities, or just to say hello.
      </p>
      <a
        href="mailto:hi@chirag.co"
        className="btn-primary"
        aria-label="Send email to Chirag Dodiya"
      >
        Email Me
      </a>
    </section>
  );
}
export default ContactSection;