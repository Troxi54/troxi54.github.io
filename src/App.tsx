import pointsProgressionScreenshot from "./assets/pointsProgression.webp"
import squareixionScreenshot from "./assets/squareixion.webp"
import wealthixScreenshot from "./assets/wealthix.webp"
import applemaniaScreenshot from "./assets/applemania.webp"
import pointRanksScreenshot from "./assets/pointRanks.webp"
import progressBarScreenshot from "./assets/progressBar.webp"
import cppGameScreenshot from "./assets/cppgame.webp"


function App() {
  return (
    <>
      <main className="w-full sm:w-11/12 md:w-4/5 lg:w-2/3 xl:w-1/2 
                       space-y-8 pt-6
                       p-4 sm:p-6 md:p-8">
        <section>
          <h1 className="mb-3">🌍 My portfolio</h1>
          <p>Hello, my name is Troxi, and I’m a web-based developer specializing in creating web applications using modern technologies like JavaScript, React, TypeScript, and Tailwind CSS. Most of my projects are incremental games 🎮, where I focus on building engaging, interactive experiences. I enjoy solving complex problems 🧩 and crafting user-friendly, visually appealing interfaces 🖥️.</p>
        </section>
        <section>
          <h2 className="mb-3">🛠️ Skills</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Languages & Markup:</strong> JavaScript, TypeScript, HTML, CSS</li>
            <li><strong>Frameworks & Libraries:</strong> React.js, Tailwind CSS, jQuery, break_eternity.js, bignumber.js</li>
            <li><strong>Tools & Platforms:</strong> Git, Vite, Node.js</li>
            <li><strong>Other:</strong> Responsive design 🌐, component architecture 🏗️</li>
          </ul>
        </section>
        <section>
          <h2 className="mb-3">📚 What I Also Have Experience With:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Roblox development (Lua) 🎮</li>
            <li>C++, SFML framework 💻</li>
            <li>Java ☕</li>
            <li>Python 🐍</li>
          </ul>
        </section>
        <section className="w-full">
          <h2 className="mb-6">📚 My projects</h2>
          <div className="flex-col space-y-4 sm:space-y-6 projects">
            <article>
              <img src={pointsProgressionScreenshot} alt="Points Progression screenshot" loading="lazy"/>
              <div>
                <h3 className="mb-2"><a href="https://troxi54.github.io/Points-Progression/" target="_blank" rel="noopener noreferrer">Points Progression</a></h3>
                <p>Stack used: Vite, React.js, TypeScript, break_eternity.js</p>
                <p>Points Progression is an incremental game where players earn points and unlock upgrades 🔧.</p>
              </div>
            </article>
            <article>
              <img src={squareixionScreenshot} alt="Squareixion screenshot" loading="lazy"/>
              <div>
                <h3 className="mb-2"><a href="https://troxi54.github.io/Squareixion/" target="_blank" rel="noopener noreferrer">Squareixion</a></h3>
                <p>Stack used: HTML, CSS, JavaScript, jQuery, break_eternity.js</p>
                <p className="text-sm">Squareixion is an incremental clicker game with its own unique atmosphere. Players progress by clicking and collecting resources, unlocking upgrades and new features as they go. The game combines simple mechanics with a rewarding progression system, offering a relaxing yet engaging experience. 🟩🔲</p>
              </div>
            </article>
            <article>
              <img src={wealthixScreenshot} alt="Wealthix screenshot" loading="lazy"/>
              <div>
                <h3 className="mb-2"><a href="https://troxi54.github.io/Wealthix/" target="_blank" rel="noopener noreferrer">Wealthix</a></h3>
                <p>Stack used: HTML, CSS, JavaScript</p>
                <p className="text-sm">Wealthix is an economic game where players focus on acquiring and upgrading generators 💰, improving their attributes, and unlocking new features as they progress 🚀. The goal is to optimize your resources and enhance your capabilities to achieve greater success in the game.</p>
              </div>
            </article>
            <article>
              <img src={applemaniaScreenshot} alt="Applemania screenshot" loading="lazy"/>
              <div>
                <h3 className="mb-2"><a href="https://troxi54.github.io/Applemania/" target="_blank" rel="noopener noreferrer">Applemania</a></h3>
                <p>Stack used: HTML, CSS, JavaScript, break_eternity.js</p>
                <p className="text-sm">Applemania is a game where players control a character to collect apples 🍎, upgrade various attributes, and unlock new features as they progress. The goal is to gather as many apples as possible while enhancing the character’s capabilities and discovering new opportunities.</p>
              </div>
            </article>
            <article>
              <img src={pointRanksScreenshot} alt="Point Ranks screenshot" loading="lazy"/>
              <div>
                <h3 className="mb-2"><a href="https://troxi54.github.io/Point-Ranks/" target="_blank" rel="noopener noreferrer">Point Ranks</a></h3>
                <p>Stack used: HTML, CSS, JavaScript, jQuery, break_eternity.js</p>
                <p className="text-sm">Point Ranks is a fully idle game where players unlock randomly generated point layers 🔢, offering infinite progression 🌌. The objective is to continuously advance through these endless layers, enhancing your score and exploring new dimensions of gameplay.</p>
              </div>
            </article>
            <article>
              <img src={progressBarScreenshot} alt="Progress Bar screenshot" loading="lazy"/>
              <div>
                <h3 className="mb-2"><a href="https://troxi54.github.io/Progress-Bar/" target="_blank" rel="noopener noreferrer">Progress Bar</a></h3>
                <p>Stack used: HTML, CSS, JavaScript, bignumber.js</p>
                <p className="text-sm">Progress Bar is an incremental game centered around a progress bar 🏁 and leveling-up mechanics. It was my first publicly released web-based game 🎮.</p>
              </div>
            </article>
            <article>
              <img src={cppGameScreenshot} alt="C++ game screenshot" loading="lazy"/>
              <div>
                <h3 className="mb-2"><a href="https://youtu.be/_YMmRKJ03II?si=PAihx9dmCbqq4jH0" target="_blank" rel="noopener noreferrer">C++ game</a></h3>
                <p>Stack used: C++, SFML</p>
                <p className="text-sm">A 2D game developed in C++ using the SFML library 🖥️. I independently implemented the core game systems, including resource generation, upgrades, and player interaction logic. This project served as the foundation for Wealthix, a web-based remake of the original game.</p>
              </div>
            </article>
          </div>
        </section>
        <section>
          <p>I also manage a community of around 400 members 👥 who actively play and discuss my games 🎮. This allows me to gather valuable feedback and continuously improve my projects based on real user experiences 🌱.</p>
        </section>
        <section>
          <h2 className="mb-3">📬 Contacts</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Email: <a href="mailto:troxidev@gmail.com" target="_blank" rel="noopener noreferrer">troxidev@gmail.com</a></li>
            <li>Discord: <a href="https://discord.com/users/789733863029997598" target="_blank" rel="noopener noreferrer">Troxi#0173</a></li>
            <li>GitHub: <a href="https://github.com/Troxi54" target="_blank" rel="noopener noreferrer">github.com/Troxi54</a></li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default App;