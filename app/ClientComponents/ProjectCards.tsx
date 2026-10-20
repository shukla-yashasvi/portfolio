"use client";

import { Box } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Image from "next/image";
import { projects, Project } from "../data/projects";

const cardHover = {
  "&:hover": {
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
    backgroundColor: "rgba(255, 255, 255, 0.04)",
    transform: "translateY(-2px)",
  },
  transition: "background-color 0.2s, transform 0.2s, box-shadow 0.2s",
};

const featuredProjects = projects.filter((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((project) => (
        <a
          key={project.name}
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          <Box
            className="flex flex-col h-full rounded-xl overflow-hidden border border-white/5"
            sx={cardHover}
          >
            <Image
              src={project.image}
              alt={project.name}
              className="w-full aspect-video object-cover object-top"
            />
            <div className="p-4 flex items-center gap-1 text-white font-bold text-sm">
              <span>{project.name}</span>
              <ArrowOutwardIcon sx={{ color: "#fff", fontSize: 14 }} />
            </div>
          </Box>
        </a>
      ))}
    </div>
  );
}

export default function ProjectCards() {
  return (
    <>
      <ProjectGrid items={featuredProjects} />
      <p className="mt-10 mb-4 text-sm font-bold" style={{ color: "#7B899D" }}>
        Other projects
      </p>
      <ProjectGrid items={otherProjects} />
    </>
  );
}
