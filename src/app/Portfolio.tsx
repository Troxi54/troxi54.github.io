import globalConfig from "@/config/data";
import Link from "@components/base/Link";

function Portfolio() {
  return (
    <section>
      <h1 className="mb-3">🌍 My portfolio</h1>
      <p>
        Hello, my name is Troxi. I'm a web developer focused on building
        interactive web applications using JavaScript, React, TypeScript, and
        Tailwind CSS. I mostly create incremental games, where I work with
        complex state management, large numbers, and long-term progression
        systems.
      </p>
      <br />
      <p>
        I have built a{" "}
        <Link href="https://discord.gg/YT8R2szHXX">
          community of {globalConfig.membersInDiscordOver}+ players
        </Link>{" "}
        who actively play my games, provide feedback, and help improve balance
        and mechanics. This experience taught me how to iterate based on real
        user data and maintain long-term projects.
      </p>
    </section>
  );
}

export default Portfolio;
