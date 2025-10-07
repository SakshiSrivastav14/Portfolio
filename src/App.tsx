import { ExternalLink, Github, Mail, Linkedin, Send } from 'lucide-react';

import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const skills = ['React', 'TypeScript', 'Next.js', 'Node.js', 'Solana', 'Express.js', 'Prisma', 'Tailwind CSS'];

function App() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);




  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

      <div className="relative max-w-4xl mx-auto px-6 py-16">
        <header className="mb-16">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-700">
             <img
             src="/sakshi.jpg"
            alt="Sakshi Srivastava"
            className="w-full h-full object-cover"
              />
           </div>

            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white mb-2">Sakshi Srivastava</h1>
              <p className="text-xl text-gray-400 mb-3">Turning glitches into growth.</p>
              <p className="text-gray-400 mb-4">
              Just a 20-year-old from India, fixing the bugs I proudly created.
              </p>
               <div className="flex items-center gap-2">
      <span className="text-sm text-gray-300 font-semibold"></span>

      <div className="relative w-40 h-8 overflow-hidden">
        {skills.map((skill, index) => {
          const isCurrent = index === currentSkillIndex;
          const isPrev = index === (currentSkillIndex - 1 + skills.length) % skills.length;
          return (
            <span
              key={index}
              className={`absolute px-2 py-1 rounded-md text-sm text-gray-200 border border-white/10 bg-white/5
                transition-all duration-1000 ease-in-out
                ${isCurrent ? "left-0 opacity-100" : ""}
                ${isPrev ? "-left-full opacity-0" : ""}
                ${!isCurrent && !isPrev ? "left-full opacity-0" : ""}
              `}
            >
              {skill}
            </span>
          );
        })}
      </div>
    </div>
              <div className="mt-6 flex gap-3">
                <a href="https://github.com/SakshiSrivastav14" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors border border-gray-800">
                  <Github size={20} />
                </a>
                <a href="mailto:sakshisrivastava8211@gmail.com" className="p-2 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors border border-gray-800">
                  <Mail size={20} />
                </a>
                <a href="https://x.com/sakshisrivas14" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors border border-gray-800">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/sakshisrivastava82/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors border border-gray-800">
                  <Linkedin size={20} />
                </a>
                <a href="https://t.me/Sakshi14s" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors border border-gray-800">
                  <Send size={20} />
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Projects</h2>

          <div className="space-y-4">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">PathFinder</h3>
                  <p className="text-gray-400"> Personalized Student Guidance Platform  </p>
                </div>
                <span className="text-sm text-gray-500">Aug '25 - Present</span>
              </div>
              <p className="text-gray-400 text-sm">Scoped and conceptualized an AI-assisted platform to reduce student decision paralysis.  
 Defined core features: interest-based quiz, roadmap generator, curated resources, mentorship system.  
  Designed engagement metrics (quiz scores, roadmap adoption, completion rates) to enable data-driven improvements.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">Health Together</h3>
                  <p className="text-gray-400"> Community Health Platform </p>
                </div>
                
              </div>
              <p className="text-gray-400 text-sm mb-3">website </p>
        
              
              <p className="text-gray-300 text-sm">Led product design of a platform enabling communities to access timely health alerts and preventive resources.   
 Collaborated with stakeholders (leaders, health workers) to prioritize impactful features. </p>
            </div>
          </div>
         
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Hackathon Achievement</h2>

          <div className="bg-gradient-to-br from-green-900/20 to-gray-900/30 border-2 border-green-800/50 rounded-xl p-6 hover:border-green-700/50 transition-all">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-semibold text-white">🏆 First Place</h3>
                <p className="text-gray-400">DronHackathon</p>
              </div>
              <span className="text-sm text-gray-500">Dec 2023</span>
            </div>
            <p className="text-gray-300 text-sm"> Hardware Project </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Skills</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all group">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-white">Product Management</h3>
                
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">User Research</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">Wireframing</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">Competitive analysis</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">A/B Testing </span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">PRD writing </span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">Agile </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all group">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-white">Data & Analytics</h3>
                
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">SQL</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">Python(Pandas,NumPy,Matplotlib)</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">Power Bi</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">Google analytics</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all group">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-white">Product & Collabration Tools </h3>
                
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">figma</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">Notion</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">Jira</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">Trello</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">Miro</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all group">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-white">Technical Skills</h3>
                
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">Data Structures & Algorithms</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">Database Management Systems</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">Operating Systems</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">Object-Oriented Programming</span>
                
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all group">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-white">Web & Tools</h3>
                
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">HTML</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">CSS</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">Git</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">GitHub</span>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">VS Code</span>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center text-gray-500 text-sm py-8">
          <p>Open to startups, big tech, and technical support opportunities</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
