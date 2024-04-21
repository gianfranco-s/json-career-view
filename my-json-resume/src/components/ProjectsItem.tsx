import React from 'react';
import { Project } from './types';

export interface ProjectsItemDataProps {
    projectsItemData: Project;
}

function ProjectsItem({ projectsItemData }: ProjectsItemDataProps) {
    const highlightTags = projectsItemData.highlights.map((hl, index) => (
        <span key={index} className="inline-block bg-blue-600 rounded-full px-2 py-1 text-sm font-semibold text-white-700 mr-2 mb-2">
            {hl}
        </span>
    ));

    const projectTitle = <h4 className="text-sm font-medium mb-1">{projectsItemData.name}</h4>;

    return (
        <div className="my-4 px-4 py-4 mr-4 bg-gray-900 rounded-lg max-w-md sm:max-w-xl md:max-w-2xl" style={{ width: '300px' }}>
            {projectsItemData.url ? <a href={projectsItemData.url}>{projectTitle}</a> : projectTitle}
            <p className="text-sm mb-3">{projectsItemData.description}</p>
            {highlightTags}
        </div>
    );
}

export default ProjectsItem;
