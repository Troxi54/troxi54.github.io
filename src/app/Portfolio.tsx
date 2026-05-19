import globalConfig from "@/config/data";
import Link from "@components/base/Link";

function Portfolio() {
  return (
    <section>
      <h1 className="text-4xl mb-3">🌍 My portfolio</h1>
      <p>
        Hello, my name is Troxi. I'm a web developer focused on building
        interactive web applications using React, Next.js, TypeScript, and
        Tailwind CSS. I specialize in incremental games - projects that involve
        complex state management, large number systems, and long-term
        progression mechanics.
      </p>
      <br />
      <p>
        I have built a{" "}
        <Link href="https://discord.gg/YT8R2szHXX">
          community of {globalConfig.membersInDiscordOver}+ players
        </Link>{" "}
        who actively play my games, provide feedback, and help shape balance and
        mechanics. This taught me how to iterate on real user feedback and
        maintain projects over time.
      </p>
      <br />
      <p>
        Outside of my main stack, I have basic knowledge of Python, Java, and
        C++.
      </p>
    </section>
  );
}

export default Portfolio;
