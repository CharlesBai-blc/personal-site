"use client";

import Link from "next/link";
import GitHubHeatmap from "@/components/features/GitHubHeatmap";
import { PORTFOLIO_PROJECTS } from "@/config/portfolio";
import styles from "./ProjectsSection.module.css";

interface ProjectsSectionProps {
  githubUsername: string;
}

export default function ProjectsSection({
  githubUsername,
}: ProjectsSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="home-projects-title">
      <span className={styles.chapterNumber} aria-hidden="true">
        02
      </span>

      <div className={styles.shell}>
        <header className={styles.header}>
          <div>
            <p className={styles.chapterLabel}>02 / Systems &amp; software</p>
            <h2 className={styles.title} id="home-projects-title">
              Selected work,
              <span>built with intent.</span>
            </h2>
          </div>
        </header>

        <div className={styles.activity}>
          <div className={styles.heatmapWrap}>
            <GitHubHeatmap username={githubUsername} />
          </div>
        </div>

        <div className={styles.projectsHeader}>
          <p className={styles.projectsLabel}>Project index / 002</p>
          <p>Selected products and experiments.</p>
        </div>

        <div className={styles.projectList}>
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <Link
              className={styles.projectLink}
              data-accent={index % 2 === 0 ? "gold" : "blue"}
              href={`/portfolio#${project.id}`}
              key={project.id}
            >
              <span className={styles.projectIndex}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className={styles.projectMain}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectSummary}>{project.summary}</p>
                <div className={styles.projectStack} aria-label="Technologies">
                  {project.stack.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              <div className={styles.projectMeta}>
                <span>{project.category}</span>
                <span>
                  {project.year} / {project.status}
                </span>
              </div>

              <span className={styles.projectArrow} aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>

        <footer className={styles.footer}>
          <p className={styles.footerMark}>More / Portfolio</p>
          <p className={styles.footerText}>
            The full project view goes deeper into the intent, implementation,
            and systems behind each build.
          </p>
          <Link className={styles.footerLink} href="/portfolio">
            View selected work
            <span aria-hidden="true">↗</span>
          </Link>
        </footer>
      </div>
    </section>
  );
}
