import React from 'react';
import ProjectsItem from './ProjectsItem';
import { Project } from './types';

interface ProjectsProps {
    projects: Project[];
}

function ProjectsCard({ projects }: ProjectsProps) {
    return (
        <div className='span'>
            <h3 className="text-2xl">Current Projects</h3>
            <div className="flex">
                <ProjectsItem projectsItemData={projects[0]}/>
                <ProjectsItem projectsItemData={projects[1]}/>
                <ProjectsItem projectsItemData={projects[2]}/>
            </div>
        </div>
    );
}

export default ProjectsCard;
