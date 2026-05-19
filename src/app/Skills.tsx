function Skills() {
  return (
    <section>
      <h2 className="text-3xl mb-3">🛠️ Skills</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong className="text-muted">Languages:</strong> TypeScript,
          JavaScript, HTML, CSS
        </li>
        <li>
          <strong className="text-muted">Frameworks & Libraries:</strong>{" "}
          Next.js, React.js, Zustand, Prisma, jQuery
        </li>
        <li>
          <strong className="text-muted">Styling:</strong> Tailwind CSS, SCSS
        </li>
        <li>
          <strong className="text-muted">Tools:</strong> Git, Vite, Node.js, npm
        </li>
        <li>
          <strong className="text-muted">Other:</strong> Responsive design,
          component architecture
        </li>
      </ul>
    </section>
  );
}

export default Skills;
