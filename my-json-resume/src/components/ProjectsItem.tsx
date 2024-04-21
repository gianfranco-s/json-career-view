import React from 'react';
import { Project } from './types';

export interface ProjectsItemDataProps {
    projectsItemData: Project;
}

function ProjectsItem({ projectsItemData }: ProjectsItemDataProps) {
    return (
        <div className="mb-4 p-4 mr-4">
        <h4 className="text-sm font-medium mb-1">{projectsItemData.name}</h4>
        <p className="text-sm mb-1">{projectsItemData.description}</p>
        <p className="text-sm mb-1">{projectsItemData.highlights}</p>
        <p className="text-sm mb-1">{projectsItemData.url}</p>
    </div>
    );
}

export default ProjectsItem;
