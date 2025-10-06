import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

export default function Projects() {
  return (
    <section
      className="container"
      style={{ padding: '2rem 0', display: 'grid', gap: '1rem' }}
    >
      <h2>Projets</h2>
      <div className="grid">
        {projects.map((p) => (
          <ProjectCard key={p.slug} {...p} />
        ))}
      </div>
    </section>
  );
}
