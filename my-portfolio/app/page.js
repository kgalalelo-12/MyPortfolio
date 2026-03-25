import Image from "next/image";



export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold">kgalalelo lefyedi</h1>
        <ul className="flex gap-6 text-sm">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PORTFOLIO</li>
          <li>GitHub</li>
          <li>CV</li>
          <li>CONTACT</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10 px-6 py-16">
        <div>
          <p className="tracking-widest text-gray-500">HAY! THERE</p>
          <h2 className="text-5xl font-bold my-4">I AM KGALALELO!</h2>
          <p className="text-lg text-gray-600 mb-6">
            A PROFESSIONAL DEVELOPER
          </p>
          <button className="border px-6 py-2 hover:bg-black hover:text-white transition">
            HIRE ME
          </button>
        </div>

        <div className="flex justify-center">
          <Image
            src="https://media.licdn.com/dms/image/v2/D4E03AQFL_5Pynhl5vQ/profile-displayphoto-scale_400_400/B4EZ0k.fl9JAAg-/0/1774441860046?e=1776297600&v=beta&t=y32hEMeBEAC1EJ6U3GU3KpvSDReY2KBhLRwVGsPql_A"
            alt="profile"
            width={350}
            height={400}
            className="rounded-xl"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">
            SOME WORD'S ABOUT ME
          </h3>
          <p className="text-gray-500 mb-10">
            I am a passionate full-stack developer building modern web apps.
          </p>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            <p>
              I love creating clean, responsive, and user-friendly applications.
              My focus is on building real-world projects that solve problems
              and improve user experience.
            </p>

            <div className="space-y-4">
              <Skill label="UI/UX DESIGN" percent={85} />
              <Skill label="WEB DESIGN" percent={90} />
              <Skill label="APP DESIGN" percent={75} />
              <Skill label="DEVELOPMENT" percent={80} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Skill({ label, percent }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded">
        <div
          className="bg-black h-2 rounded"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
