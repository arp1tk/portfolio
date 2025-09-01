import Link from "next/link"

export function Sidebar() {
  return (
    <aside className="w-full lg:w-auto lg:border-r border-b lg:border-b-0 border-gray-900 p-4 md:p-6 lg:pr-4">
      <div className="space-y-6 lg:space-y-8">
        {/* Introduction */}
        <div>
          <p className="text-base lg:text-lg leading-relaxed text-black">
            Hi! I'm a full stack developer passionate about creating scalable web solutions, building innovative
            applications, and solving complex problems through technology.
          </p>
        </div>

        {/* Education */}
        <div>
          <p className="text-sm lg:text-base text-black">
            Currently studying <em>Computer Science and Design</em> @ IMS Engineering College, Ghaziabad.
          </p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-wrap gap-3 lg:gap-4 text-xs lg:text-sm">
          <Link href="mailto:arpitkukrety27@gmail.com" className="text-gray-600 hover:text-black underline">
            Email
          </Link>
          <Link
            href="https://linkedin.com/in/arpit-kukreti-4a3824302"
            className="text-gray-600 hover:text-black underline"
          >
            LinkedIn
          </Link>
          <span className="text-gray-700">+91 9870894706</span>
        </div>

        {/* Freelance above Achievements */}
        <div className="border-t border-gray-900 pt-4">
          <h2 className="text-lg lg:text-xl font-bold text-black mb-3 lg:mb-4">FREELANCE DEVELOPER</h2>
          <div>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-1.5">
              <div>
                <h3 className="font-semibold text-black text-sm lg:text-base">Full Stack Developer</h3>
                <p className="text-gray-600 text-xs lg:text-sm">MERN Stack</p>
              </div>
              <span className="text-xs lg:text-sm text-gray-600 mt-1 lg:mt-0">Dec 2024 – Present</span>
            </div>
            <p className="text-xs lg:text-sm text-black leading-relaxed">
              Delivered professional websites including Interior Design Company (kdesign-interiors.com) and IT
              Consultancy (devixlab.com) using React/Next.js and Tailwind with responsive UI/UX.
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="border-t border-gray-900 pt-4">
          <h2 className="text-lg lg:text-xl font-bold text-black mb-3 lg:mb-4">ACHIEVEMENTS</h2>
          <div className="space-y-3 lg:space-y-4">
            <div>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-1.5">
                <div>
                  <h3 className="font-semibold text-black text-sm lg:text-base">Smart India Hackathon 2024</h3>
                  <p className="text-gray-600 text-xs lg:text-sm">Winner</p>
                </div>
                <span className="text-xs lg:text-sm text-gray-600 mt-1 lg:mt-0">2024</span>
              </div>
              <p className="text-xs lg:text-sm text-black leading-relaxed">
                Won SIH 2024 (Problem Statement 1743 by NIA) by developing a tool to analyze and document social media
                data, showcasing innovation and technical expertise.
              </p>
            </div>

            <div>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-1.5">
                <div>
                  <h3 className="font-semibold text-black text-sm lg:text-base">Patent Publication</h3>
                  <p className="text-gray-600 text-xs lg:text-sm">App No. 202211074490</p>
                </div>
                <span className="text-xs lg:text-sm text-gray-600 mt-1 lg:mt-0">2022</span>
              </div>
              <p className="text-xs lg:text-sm text-black leading-relaxed">
                Published a patent in the first year of college, demonstrating early innovation and research capability.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Skills under Achievements */}
        <div className="border-t border-gray-900 pt-4">
          <h2 className="text-lg lg:text-xl font-bold text-black mb-3 lg:mb-4">TECHNICAL SKILLS</h2>
          <div className="space-y-2.5 lg:space-y-3">
            <div>
              <h3 className="font-semibold text-black mb-1 text-sm lg:text-base">Languages</h3>
              <p className="text-xs lg:text-sm text-gray-700">JavaScript, TypeScript, HTML5, CSS3, Java</p>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-1 text-sm lg:text-base">Frontend</h3>
              <p className="text-xs lg:text-sm text-gray-700">React.js, Next.js, Tailwind CSS, Vite</p>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-1 text-sm lg:text-base">Backend</h3>
              <p className="text-xs lg:text-sm text-gray-700">Node.js, Express.js, JWT</p>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-1 text-sm lg:text-base">Database</h3>
              <p className="text-xs lg:text-sm text-gray-700">MongoDB, Firebase, PostgreSQL</p>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-1 text-sm lg:text-base">Cloud & DevOps</h3>
              <p className="text-xs lg:text-sm text-gray-700">AWS (EC2, S3), Docker, CI/CD basics</p>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-1 text-sm lg:text-base">Tools</h3>
              <p className="text-xs lg:text-sm text-gray-700">Git, GitHub, Postman, VS Code</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
