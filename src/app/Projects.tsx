import pointsProgressionScreenshot from "@assets/pointsProgression.webp";
import skyflapScreenshot from "@assets/skyflap.webp";
import squareixionScreenshot from "@assets/squareixion.webp";
import wealthixScreenshot from "@assets/wealthix.webp";
import cppGameScreenshot from "@assets/cppgame.webp";
import Project from "@components/base/Project";
import Link from "@components/base/Link";

function Projects() {
  return (
    <section>
      <h2 className="text-3xl mb-6">💼 My projects</h2>
      <div className="flex flex-col items-start justify-start space-y-4 sm:space-y-6">
        <Project
          name="Points Progression"
          screenshotSrc={pointsProgressionScreenshot}
          src="https://troxi54.github.io/Points-Progression/"
          sourceSrc="https://github.com/Troxi54/Points-Progression"
          stack={
            <>React.js, Zustand, Tailwind CSS, TypeScript, break_eternity.js</>
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
          name="Skyflap"
          screenshotSrc={skyflapScreenshot}
          src="https://skyflap-troxi.vercel.app/"
          sourceSrc="https://github.com/Troxi54/Skyflap"
          stack={<>Next.js, Tailwind CSS, Prisma, TypeScript</>}
          description={
            <>
              A simple social platform where users can sign up, create posts,
              and browse a paginated feed.
            </>
          }
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
          name="C++ game"
          screenshotSrc={cppGameScreenshot}
          src="https://youtu.be/_YMmRKJ03II"
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
