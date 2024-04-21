import React from 'react';
import ProjectsItem from './ProjectsItem';
import { Project } from './types';

interface ProjectsProps {
    projects: Project[];
}

function ProjectsCard({ projects }: ProjectsProps) {
    const projectsList = projects.map((prj, index) => <ProjectsItem key={index} projectsItemData={prj} />)
    return (
        <div className='span'>
            <h3 className="text-2xl">Current Projects</h3>
            <div className="flex">
                {projectsList}
            </div>
        </div>
    );
}

export default ProjectsCard;
