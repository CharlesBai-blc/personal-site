import type { Metadata } from "next";
import InteriorPage from "@/components/layout/InteriorPage";
import {
  CAPABILITIES,
  PRINCIPLES,
  PROFILE_FACTS,
} from "@/config/profile";

export const metadata: Metadata = {
  title: "About | Charles Bai",
  description:
    "About Charles Bai, a Cornell computer science student building thoughtful software across backend systems, cloud infrastructure, and applied NLP.",
};

export default function About() {
  return (
    <InteriorPage>
      <main>
        <section className="interior-hero about-hero">
          <div className="interior-grid" aria-hidden="true" />
          <div className="about-hero__number" aria-hidden="true">
            01
          </div>

          <div className="interior-shell interior-hero__content">
            <p className="interior-kicker interior-reveal">01 / About</p>

            <div className="about-hero__layout">
              <div>
                <p className="about-hero__role interior-reveal interior-reveal--delay-1">
                  Software engineer · Cornell CS
                </p>
                <h1 className="interior-reveal interior-reveal--delay-2">
                  Building software
                  <span>with intention.</span>
                </h1>
              </div>

              <aside className="about-hero__telemetry interior-reveal interior-reveal--delay-3">
                <div className="about-hero__signal">
                  <span aria-hidden="true" />
                  Available for interesting problems
                </div>
                <dl>
                  <div>
                    <dt>Location</dt>
                    <dd>Ithaca, New York</dd>
                  </div>
                  <div>
                    <dt>Coordinates</dt>
                    <dd>42.4430° N / 76.5019° W</dd>
                  </div>
                  <div>
                    <dt>Discipline</dt>
                    <dd>Software engineering</dd>
                  </div>
                </dl>
              </aside>
            </div>

            <div className="interior-scroll-cue interior-reveal interior-reveal--delay-4">
              <span>Scroll to inspect</span>
              <i aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="about-intro interior-section">
          <div className="interior-shell">
            <div className="interior-section__heading">
              <p className="interior-kicker">Profile / 001</p>
              <p>Engineer in training. Builder by default.</p>
            </div>

            <div className="about-intro__grid">
              <h2>
                I care about the point where strong engineering becomes a
                product people can actually use.
              </h2>

              <div className="about-intro__copy">
                <p>
                  I&apos;m Charles, a computer science student at Cornell
                  University. I spend most of my time learning how reliable
                  systems are designed, then testing those ideas by building
                  full-stack products of my own.
                </p>
                <p>
                  My interests sit around backend development, cloud
                  infrastructure, and natural language processing. Away from a
                  keyboard, I&apos;m usually playing tennis, watching a film,
                  or finding a new game to get far too competitive about.
                </p>
              </div>
            </div>

            <dl className="about-facts">
              {PROFILE_FACTS.map((fact, index) => (
                <div key={fact.label}>
                  <dt>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {fact.label}
                  </dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="about-capabilities interior-section">
          <div className="interior-shell">
            <div className="interior-section__heading interior-section__heading--light">
              <p className="interior-kicker">Capabilities / 002</p>
              <p>Where I like to work.</p>
            </div>

            <div className="capability-list">
              {CAPABILITIES.map((capability, index) => (
                <article className="capability-row" key={capability.title}>
                  <span className="capability-row__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2>{capability.title}</h2>
                  <p>{capability.description}</p>
                  <span className="capability-row__tech">
                    {capability.technologies}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-principles interior-section">
          <div className="about-principles__marker" aria-hidden="true">
            BUILD / LEARN / REPEAT
          </div>
          <div className="interior-shell">
            <div className="interior-section__heading">
              <p className="interior-kicker">Principles / 003</p>
              <p>How I approach the work.</p>
            </div>

            <div className="principles-layout">
              <h2>
                Good software is a series of careful decisions, made visible.
              </h2>
              <ol>
                {PRINCIPLES.map((principle, index) => (
                  <li key={principle.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{principle.title}</h3>
                      <p>{principle.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </main>
    </InteriorPage>
  );
}
