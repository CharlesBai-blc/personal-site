import type { Metadata } from "next";
import InteriorPage from "@/components/layout/InteriorPage";
import ProjectShowcase from "@/components/portfolio/ProjectShowcase";
import { PORTFOLIO_PROJECTS } from "@/config/portfolio";

export const metadata: Metadata = {
  title: "Portfolio | Charles Bai",
  description:
    "Selected software engineering projects by Charles Bai, spanning developer tools, cloud systems, and data-rich web products.",
};

export default function Portfolio() {
  return (
    <InteriorPage>
      <main>
        <section className="interior-hero portfolio-hero">
          <div className="interior-grid" aria-hidden="true" />
          <div className="portfolio-hero__scope" aria-hidden="true">
            <span />
            <span />
            <span />
            <i />
          </div>

          <div className="interior-shell interior-hero__content">
            <p className="interior-kicker interior-reveal">
              02 / Selected work
            </p>

            <div className="portfolio-hero__title">
              <p className="interior-reveal interior-reveal--delay-1">
                Software / systems / experiments
              </p>
              <h1 className="interior-reveal interior-reveal--delay-2">
                Work built to
                <span>do something.</span>
              </h1>
            </div>

            <div className="portfolio-hero__footer interior-reveal interior-reveal--delay-3">
              <p>
                A small selection of projects where I&apos;ve explored product
                thinking, infrastructure, and the details between them.
              </p>
              <dl>
                <div>
                  <dt>Projects</dt>
                  <dd>{String(PORTFOLIO_PROJECTS.length).padStart(2, "0")}</dd>
                </div>
                <div>
                  <dt>Window</dt>
                  <dd>2025—26</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="portfolio-index">
          <div className="interior-shell portfolio-index__inner">
            <p className="interior-kicker">Project index</p>
            <ol>
              {PORTFOLIO_PROJECTS.map((project, index) => (
                <li key={project.id}>
                  <a href={`#${project.id}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{project.title}</strong>
                    <em>{project.category}</em>
                    <i aria-hidden="true">↓</i>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="portfolio-projects">
          <div className="interior-shell">
            {PORTFOLIO_PROJECTS.map((project, index) => (
              <ProjectShowcase
                key={project.id}
                index={index}
                project={project}
              />
            ))}
          </div>
        </section>

        <section className="portfolio-next">
          <div className="interior-shell portfolio-next__inner">
            <p className="interior-kicker">Next / 003</p>
            <div>
              <h2>The next build is already in motion.</h2>
              <p>
                New systems, experiments, and case studies will appear here as
                they earn their place.
              </p>
            </div>
            <a
              href="https://github.com/CharlesBai-blc"
              target="_blank"
              rel="noreferrer"
            >
              Follow the work on GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
    </InteriorPage>
  );
}
