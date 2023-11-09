'use client';

import { useEffect, useState } from 'react';
import { client_projects } from '../data/projects';

import { useSearchParams } from 'next/navigation';
import { projectItemProps } from '../definitions';
import { GridGenerator } from './GridGenerator';

export const Project = () => {
  const [client] = useSearchParams().getAll('client');
  const [project, setProject] = useState<null | projectItemProps>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const project = client_projects.filter(
      (project) => project.slug === client
    )[0];

    if (project) {
      setProject(project);
      setLoading(false);
    }
  }, [client]);

  if (loading) {
    return (
      <div className="grid place-content-center">
        <span>Loading....</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header client={project.client} />
    </div>
  );
};

const Header = ({ client }: { client: string }) => {
  return (
    <div className="flex flex-wrap relative border-t">
      <div className="absolute w-full h-full flex items-center">
        <div className="h-full w-2" />
        <div className="flex items-center px-4">
          <h1
            className={`font-medium text-[10vw] lg:text-[120px] translate-x-0 transition`}
          >
            {client}
          </h1>
        </div>
      </div>
      <GridGenerator />
    </div>
  );
};
