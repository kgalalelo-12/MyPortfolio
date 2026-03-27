import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold">Kgalalelo Lefyedi</h1>
        <ul className="flex gap-6">
          <li>Home</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Hi, I&apos;m a Full Stack Developer</h2>
        <p className="text-gray-400 mb-6">
          I build modern web applications using Next.js and Tailwind CSS
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-xl">
          View My Work
        </button>
      </section>

      {/* Projects Section */}
      <section className="mt-20">
        <h3 className="text-3xl font-semibold mb-6">Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((project) => (
            <div key={project} className="bg-gray-800 p-4 rounded-2xl">
              <h4 className="text-xl font-bold mb-2">Project {project}</h4>
              <p className="text-gray-400">Short project description</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-20 text-center">
        <h3 className="text-3xl font-semibold mb-4">Contact Me</h3>
        <p className="text-gray-400">Email: your@email.com</p>
      </section>
    </div>
  );
}
