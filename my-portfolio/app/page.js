import Image from "next/image";

const techStack = [
  { name: "HTML5", type: "Structure" },
  { name: "CSS3", type: "Styling" },
  { name: "JavaScript", type: "Logic" },
  { name: "React", type: "Frontend" },
  { name: "Next.js", type: "Framework" },
  { name: "Tailwind CSS", type: "UI System" },
  { name: "Node.js", type: "Backend" },
  { name: "GitHub", type: "Collaboration" },
];

const highlights = [
  "Building clean and responsive web experiences",
  "Turning ideas into fast, polished interfaces",
  "Growing as a junior full-stack developer every day",
];

const projects = [
  {
    name: "Fundease",
    category: "Student Funding Platform",
    description:
      "Fundease is an app designed to simplify the student funding application process by allowing students to create a profile, upload their documents once, and apply to multiple funding opportunities in one platform.",
    impact:
      "It helps reduce repeated admin work and makes funding applications feel faster, simpler, and more accessible for students.",
  },
  {
    name: "Calculator",
    category: "Basic JavaScript Project",
    description:
      "I built a calculator using the basics of web development to perform standard arithmetic operations in a simple and user-friendly interface.",
    impact:
      "This project helped me strengthen my understanding of HTML, CSS, and JavaScript fundamentals while building interactive functionality from scratch.",
  },
  {
    name: "Personal Portfolio",
    category: "Next.js Portfolio Website",
    description:
      "This is my personal portfolio website built with Next.js to showcase who I am, the projects I have worked on, and the technologies I use as a developer.",
    impact:
      "It gives me a professional online space to present my skills, highlight my work, and create a strong first impression through modern design and clean development.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-[var(--accent-strong)] blur-[140px]" />
        <div className="absolute right-[-6rem] top-80 h-80 w-80 rounded-full bg-[var(--accent-soft)] blur-[150px]" />
        <div className="absolute bottom-[-4rem] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--accent-strong)] blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,105,180,0.12),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_22%)]" />
      </div>

      <nav className="sticky top-0 z-30 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold uppercase tracking-[0.18em]">
            KGalalelo Lefyedi
          </a>

          <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#home" className="transition hover:text-[var(--accent)]">
              Home
            </a>
            <a href="#about" className="transition hover:text-[var(--accent)]">
              About
            </a>
            <a href="#stack" className="transition hover:text-[var(--accent)]">
              Tech Stack
            </a>
            <a href="#projects" className="transition hover:text-[var(--accent)]">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-[var(--accent)]">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-[var(--border)] bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[var(--accent)] shadow-[0_0_30px_rgba(255,78,154,0.18)]">
            Junior Full-Stack Developer
          </div>

          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.45em] text-white/45">
              Hello there
            </p>
            <h1 className="max-w-xl text-5xl font-semibold leading-tight sm:text-6xl">
              Kgalalelo builds modern digital experiences with purpose.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/70">
              I design and develop sleek websites that feel current, confident,
              and easy to use. My style blends clean structure with bold visual
              energy.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#about"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(255,78,154,0.5)]"
            >
              Explore About Me
            </a>
            <a
              href="#stack"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              View Tech Stack
            </a>
          </div>

          <div className="grid gap-3 pt-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/70 shadow-[0_10px_40px_rgba(0,0,0,0.22)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end md:pr-0">
          <div className="absolute right-[-0.5rem] top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-[var(--accent-strong)] blur-[150px]" />
          <div className="relative z-10 ml-auto overflow-hidden rounded-full border border-[var(--border)] shadow-[0_0_70px_rgba(255,78,154,0.24)] h-[22rem] w-[22rem] sm:h-[26rem] sm:w-[26rem] lg:h-[30rem] lg:w-[30rem] md:translate-x-1">
            <Image
              src="/Adobe Express - file.png"
              alt="Portrait of Kgalalelo"
              width={760}
              height={900}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-[var(--border)] bg-white/6 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.28)]">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[var(--accent)]">
              About Me
            </p>
            <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
              I enjoy creating websites that feel smooth, intentional, and alive.
            </h2>
            <p className="text-base leading-8 text-white/72">
              I am a passionate junior full-stack developer who loves blending
              design and development. I focus on building responsive, modern web
              applications that look great, work well, and give users a strong
              first impression.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <InfoCard
              title="Design Thinking"
              text="I care about layout, spacing, contrast, and interfaces that feel polished instead of generic."
            />
            <InfoCard
              title="Clean Development"
              text="I enjoy building with React, Next.js, and practical frontend patterns that keep projects maintainable."
            />
            <InfoCard
              title="Growth Mindset"
              text="Every project is a chance to sharpen my skills, experiment with style, and improve performance."
            />
            <div className="rounded-[2rem] border border-[var(--border)] bg-black/60 p-6 shadow-[0_0_45px_rgba(255,78,154,0.16)]">
              <p className="mb-5 text-sm uppercase tracking-[0.35em] text-white/50">
                Creative Energy
              </p>
              <div className="space-y-5">
                <Skill label="UI Design" percent={88} />
                <Skill label="Responsive Layouts" percent={92} />
                <Skill label="Frontend Development" percent={86} />
                <Skill label="Problem Solving" percent={80} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold text-[var(--accent)] sm:text-4xl">
            My Projects
          </h2>
        </div>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-[2rem] border border-[var(--border)] bg-white/6 p-8 shadow-[0_20px_55px_rgba(0,0,0,0.28)]"
            >
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/45">
                {project.category}
              </p>
              <h3 className="mb-4 text-3xl font-semibold text-white">
                {project.name}
              </h3>
              <p className="max-w-3xl text-base leading-8 text-white/72">
                {project.description}
              </p>
              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/40 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
                  Why It Matters
                </p>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-white/68">
                  {project.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="stack" className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-[var(--accent)]">
            Tech Stack
          </p>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            The tools I use to design, build, and ship modern web experiences.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group rounded-[1.8rem] border border-[var(--border)] bg-white/6 p-6 transition hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_0_35px_rgba(255,78,154,0.2)]"
            >
              <p className="mb-10 text-xs uppercase tracking-[0.35em] text-white/40">
                {tech.type}
              </p>
              <h3 className="text-2xl font-semibold text-white transition group-hover:text-[var(--accent)]">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <footer
        id="contact"
        className="relative border-t border-white/10 bg-black/70 px-6 py-10 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-lg font-semibold uppercase tracking-[0.3em]">
              Kgalalelo Lefyedi
            </p>
            <p className="max-w-xl text-sm leading-7 text-white/60">
              A junior full-stack developer creating clean, modern, and
              expressive digital experiences with a bold visual identity.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            <a
              href="https://github.com/"
              className="rounded-full border border-white/12 px-4 py-2 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              GitHub
            </a>
            <a
              href="mailto:hello@example.com"
              className="rounded-full border border-white/12 px-4 py-2 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Email
            </a>
            <a
              href="#home"
              className="rounded-full border border-white/12 px-4 py-2 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Back to Top
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className="rounded-[2rem] border border-[var(--border)] bg-white/6 p-6 shadow-[0_15px_45px_rgba(0,0,0,0.22)]">
      <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm leading-7 text-white/68">{text}</p>
    </div>
  );
}

function Skill({ label, percent }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm text-white/72">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-white/10">
        <div
          className="h-2.5 rounded-full bg-[linear-gradient(90deg,#ff4e9a,#ff9fd0)] shadow-[0_0_18px_rgba(255,78,154,0.45)]"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
