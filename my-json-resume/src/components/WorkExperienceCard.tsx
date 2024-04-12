import React from 'react';
import WorkExperienceItem, { WorkExperienceItemDataProps } from './WorkExperienceItem';

interface WorkExperienceCardProps{
    workExperience: WorkExperienceItemDataProps[];
}

function WorkExperienceCard({ workExperience }: WorkExperienceCardProps) {
    const workExperiences = workExperience.map((workExp, index) => {
        return <WorkExperienceItem key={index} workExperienceItemData={workExp} />
    })
    return (
        <div>
            <h2 className="text-2xl mb-4">Work Experience</h2>
            {workExperiences}
        </div>
    );
}

export default WorkExperienceCard;
