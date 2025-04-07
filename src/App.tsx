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
          <p>Hello, my name is Troxi, and I’m a web-based developer specializing in creating web applications using modern technologies like JavaScript, React, TypeScript, and Tailwind CSS. Most of my projects are incremental games, where I focus on building engaging, interactive experiences.</p>
        </section>
        <section>
          <h2 className="mb-3">🛠️ Skills</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Languages & Markup:</strong> JavaScript, TypeScript, HTML, CSS</li>
            <li><strong>Frameworks & Libraries:</strong> React.js, Tailwind CSS, jQuery, break_eternity.js, bignumber.js</li>
            <li><strong>Tools & Platforms:</strong> Git, Vite, Node.js</li>
            <li><strong>Other:</strong> Responsive design, component architecture</li>
          </ul>
        </section>
        <section>
          <h2 className="mb-3">🧰 Additional experience</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Roblox development (Lua)</li>
            <li>C++, SFML framework</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
        </section>
        <section className="w-full">
          <h2 className="mb-6">💼 My projects</h2>
          <div className="flex-col space-y-4 sm:space-y-6 projects">
            <article>
              <img src={pointsProgressionScreenshot} alt="Points Progression screenshot" loading="lazy"/>
              <div>
                <h3 className="mb-2"><a href="https://troxi54.github.io/Points-Progression/" target="_blank" rel="noopener noreferrer">Points Progression</a></h3>
                <p>Stack used: Vite, React.js, TypeScript, break_eternity.js</p>
                <p className="text-sm">An incremental game where players earn points and unlock upgrades. Designed with a clean interface and scalable progression system.</p>
              </div>
            </article>
            <article>
              <img src={squareixionScreenshot} alt="Squareixion screenshot" loading="lazy"/>
              <div>
                <h3 className="mb-2"><a href="https://troxi54.github.io/Squareixion/" target="_blank" rel="noopener noreferrer">Squareixion</a></h3>
                <p>Stack used: HTML, CSS, JavaScript, jQuery, break_eternity.js</p>
                <p className="text-sm">A clicker-style incremental game with a distinctive visual style. Players progress by clicking, upgrading, and exploring new features at their own pace.</p>
              </div>
            </article>
            <article>
              <img src={wealthixScreenshot} alt="Wealthix screenshot" loading="lazy"/>
              <div>
                <h3 className="mb-2"><a href="https://troxi54.github.io/Wealthix/" target="_blank" rel="noopener noreferrer">Wealthix</a></h3>
                <p>Stack used: HTML, CSS, JavaScript</p>
                <p className="text-sm">An economy-focused game centered around upgrading generators and optimizing performance. Players strategically manage resources to reach new milestones.</p>
              </div>
            </article>
            <article>
              <img src={applemaniaScreenshot} alt="Applemania screenshot" loading="lazy"/>
              <div>
                <h3 className="mb-2"><a href="https://troxi54.github.io/Applemania/" target="_blank" rel="noopener noreferrer">Applemania</a></h3>
                <p>Stack used: HTML, CSS, JavaScript, break_eternity.js</p>
                <p className="text-sm">A game where players control a character that collects apples, enhances abilities, and unlocks additional gameplay mechanics. A simple yet polished experience focused on steady progression.</p>
              </div>
            </article>
            <article>
              <img src={pointRanksScreenshot} alt="Point Ranks screenshot" loading="lazy"/>
              <div>
                <h3 className="mb-2"><a href="https://troxi54.github.io/Point-Ranks/" target="_blank" rel="noopener noreferrer">Point Ranks</a></h3>
                <p>Stack used: HTML, CSS, JavaScript, jQuery, break_eternity.js</p>
                <p className="text-sm">A fully idle game where players unlock randomly generated layers for infinite growth. The layered system offers deep progression and varied scaling.</p>
              </div>
            </article>
            <article>
              <img src={progressBarScreenshot} alt="Progress Bar screenshot" loading="lazy"/>
              <div>
                <h3 className="mb-2"><a href="https://troxi54.github.io/Progress-Bar/" target="_blank" rel="noopener noreferrer">Progress Bar</a></h3>
                <p>Stack used: HTML, CSS, JavaScript, bignumber.js</p>
                <p className="text-sm">A minimalist incremental game centered around a progress bar and featuring reset layers and upgrades. This was my first publicly released web-based project and an introduction to large number logic using bignumber.js.</p>
              </div>
            </article>
            <article>
              <img src={cppGameScreenshot} alt="C++ game screenshot" loading="lazy"/>
              <div>
                <h3 className="mb-2"><a href="https://youtu.be/_YMmRKJ03II?si=PAihx9dmCbqq4jH0" target="_blank" rel="noopener noreferrer">C++ game</a></h3>
                <p>Stack used: C++, SFML</p>
                <p className="text-sm">A 2D game developed with SFML, featuring upgrade mechanics and dynamic resource generation. This was the foundation for the web-based remake Wealthix.</p>
              </div>
            </article>
          </div>
        </section>
        <section>
          <p>I have a community of over 400 members who actively play my games, share feedback, and discuss new ideas. Their input helps me improve gameplay balance, identify issues early, and evolve my projects based on real user experience.</p>
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