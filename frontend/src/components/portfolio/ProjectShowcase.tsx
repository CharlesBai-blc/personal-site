import ProjectArtwork from "@/components/portfolio/ProjectArtwork";
import type { PortfolioProject } from "@/config/portfolio";

interface ProjectShowcaseProps {
  index: number;
  project: PortfolioProject;
}

export default function ProjectShowcase({
  index,
  project,
}: ProjectShowcaseProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="project-showcase" id={project.id}>
      <div className="project-showcase__artwork">
        <ProjectArtwork variant={project.visual} />
      </div>

      <div className="project-showcase__content">
        <div className="project-showcase__meta">
          <span>{number}</span>
          <span>{project.category}</span>
        </div>

        <h2>{project.title}</h2>
        <p className="project-showcase__summary">{project.summary}</p>
        <p className="project-showcase__detail">{project.detail}</p>

        <dl className="project-showcase__facts">
          <div>
            <dt>Year</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{project.status}</dd>
          </div>
        </dl>

        <ul className="project-showcase__stack" aria-label="Technologies">
          {project.stack.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        {project.href && (
          <a
            className="project-showcase__link"
            href={project.href}
            target="_blank"
            rel="noreferrer"
          >
            View live project
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}
