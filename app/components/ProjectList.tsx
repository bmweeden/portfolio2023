'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

import { client_projects } from '../data/projects';
import { projectItemProps } from '../definitions';
import { GridGenerator } from './GridGenerator';

export const ProjectList = () => {
  return (
    <div className="flex flex-col border-t">
      {client_projects &&
        client_projects.map((project, i) => (
          <ProjectItem key={i} project={project} />
        ))}
    </div>
  );
};

const ProjectItem = ({ project }: { project: projectItemProps }) => {
  const { client, slug } = project;

  const [hovering, setHovering] = useState(false);

  return (
    <div className="flex flex-wrap relative">
      <Link
        className="h-full w-full flex items-center absolute"
        href={`/project?client=${slug}`}
      >
        <div
          className={`h-full w-[4px] transition hidden md:block ${
            hovering && 'bg-indigo-500'
          }`}
        />

        <div
          className="h-full w-full flex items-center gap-4"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <span className="font-medium text-[10vw] lg:text-[120px] transition ml-2 md:ml-4">
            {client}
          </span>
          <span
            className={`hidden md:block transition ${
              hovering ? 'opacity-1' : 'opacity-0'
            }`}
          >
            <ChevronRight size={48} />
          </span>
          <span className="md:hidden transition">
            <ChevronRight size={18} />
          </span>
        </div>
      </Link>

      <GridGenerator />
    </div>
  );
};
