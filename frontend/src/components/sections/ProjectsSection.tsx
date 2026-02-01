/**
 * ProjectsSection Component
 * Displays GitHub heatmap and current projects
 *
 * Reasons for separate file:
 * 1. Separation of concerns: Projects section logic isolated from page structure
 * 2. Reusability: Can be used in portfolio page or other project showcases
 */

"use client";

import GitHubHeatmap from "@/components/features/GitHubHeatmap";
import ProjectBullet from "@/components/ui/ProjectBullet";
import { PROJECTS } from "@/config/projects";

interface ProjectsSectionProps {
  githubUsername: string;
}

export default function ProjectsSection({
  githubUsername,
}: ProjectsSectionProps) {
  return (
    <section className="min-h-screen flex items-start justify-center px-4 pt-16 pb-8 bg-black overflow-y-auto relative">
      <div className="text-center max-w-6xl w-full space-y-10 mt-8">
        <GitHubHeatmap username={githubUsername} />

        {/* Current Projects/Interests */}
        <div className="space-y-6">
          <h2 className="text-3xl font-light text-white font-display tracking-tight">
            what i&apos;ve been up to
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {PROJECTS.map((project, index) => (
              <ProjectBullet
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
