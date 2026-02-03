import pointsProgressionScreenshot from "@assets/pointsProgression.webp";
import squareixionScreenshot from "@assets/squareixion.webp";
import wealthixScreenshot from "@assets/wealthix.webp";
import applemaniaScreenshot from "@assets/applemania.webp";
import pointRanksScreenshot from "@assets/pointRanks.webp";
import progressBarScreenshot from "@assets/progressBar.webp";
import cppGameScreenshot from "@assets/cppgame.webp";
import Project from "@components/base/Project";
import Link from "@components/base/Link";

function Projects() {
  return (
    <section className="w-full">
      <h2 className="mb-6">💼 My projects</h2>
      <div className="flex-col space-y-4 sm:space-y-6 projects">
        <Project
          name="Points Progression"
          screenshotSrc={pointsProgressionScreenshot}
          src="https://troxi54.github.io/Points-Progression/"
          sourceSrc="https://github.com/Troxi54/Points-Progression"
          stack={
            <>
              Vite, React.js, Zustand, Tailwind CSS, TypeScript,
              break_eternity.js, lz-string
            </>
          }
          description={
            <>
              An incremental game where players earn points and unlock upgrades.
              My current biggest project.
            </>
          }
          links={[
            {
              name: "Galaxy",
              src: "https://galaxy.click/play/527",
            },
            {
              name: "Itch.io",
              src: "https://troxi.itch.io/points-progression",
            },
          ]}
        />
        <Project
          name="Squareixion"
          screenshotSrc={squareixionScreenshot}
          src="https://troxi54.github.io/Squareixion/"
          sourceSrc="https://github.com/Troxi54/Squareixion"
          stack={<>HTML, CSS, JavaScript, jQuery, break_eternity.js</>}
          description={
            <>
              A clicker incremental game with a distinctive visual style. Remake
              of my original roblox game{" "}
              <Link href="https://www.roblox.com/games/12991163528/">
                Cubixion
              </Link>
            </>
          }
          links={[
            {
              name: "Galaxy",
              src: "https://galaxy.click/play/447",
            },
            {
              name: "Itch.io",
              src: "https://troxi.itch.io/squareixion",
            },
          ]}
        />
        <Project
          name="Wealthix"
          screenshotSrc={wealthixScreenshot}
          src="https://troxi54.github.io/Wealthix/"
          sourceSrc="https://github.com/Troxi54/Wealthix"
          stack={<>HTML, CSS, JavaScript</>}
          description={
            <>
              An economy-focused game centered around upgrading generators and
              optimizing performance. Remake of my original C++ game (see below)
            </>
          }
        />
        <Project
          name="Applemania"
          screenshotSrc={applemaniaScreenshot}
          src="https://troxi54.github.io/Applemania/"
          sourceSrc="https://github.com/Troxi54/Applemania"
          stack={<>HTML, CSS, JavaScript, break_eternity.js</>}
          description={
            <>
              A game where players control a character that collects apples,
              enhances abilities, and unlocks additional gameplay mechanics.
            </>
          }
        />
        <Project
          name="Point Ranks"
          screenshotSrc={pointRanksScreenshot}
          src="https://troxi54.github.io/Point-Ranks/"
          sourceSrc="https://github.com/Troxi54/Point-Ranks"
          stack={<>HTML, CSS, JavaScript, jQuery, break_eternity.js</>}
          description={
            <>
              A fully idle game where players unlock randomly generated layers
              for infinite growth
            </>
          }
        />
        <Project
          name="Progress Bar"
          screenshotSrc={progressBarScreenshot}
          src="https://troxi54.github.io/Progress-Bar/"
          sourceSrc="https://github.com/Troxi54/Progress-Bar"
          stack={<>HTML, CSS, JavaScript, bignumber.js</>}
          description={
            <>
              A minimalist incremental game centered around a progress bar and
              featuring reset layers and upgrades. This was my first publicly
              released web project and an introduction to large number logic
              using bignumber.js.
            </>
          }
        />
        <Project
          name="C++ game"
          screenshotSrc={cppGameScreenshot}
          src={cppGameScreenshot}
          stack={<>C++, SFML</>}
          description={
            <>
              A 2D game developed with SFML, featuring upgrade mechanics and
              dynamic resource generation. This was the foundation for the web
              remake Wealthix
            </>
          }
        />
      </div>
    </section>
  );
}

export default Projects;
