import React from 'react';
import WorkExperienceItem from './WorkExperienceItem';
import { WorkExperience } from './types';

interface WorkExperienceCardProps {
    workExperience: WorkExperience[];
}

function WorkExperienceCard({ workExperience }: WorkExperienceCardProps) {
    const workExperiences = workExperience.map((workExp, index) => {
        return <WorkExperienceItem key={index} workExperienceItemData={workExp} />
    })
    return (
        <div>
            <h3 className="text-2xl mb-4">Work Experience</h3>
            {workExperiences}
        </div>
    );
}

export default WorkExperienceCard;
