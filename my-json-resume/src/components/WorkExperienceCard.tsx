import React from 'react';
import WorkExperienceItem, { WorkExperienceItemDataProps } from './WorkExperienceItem';

interface WorkExperienceCardProps{
    workExperience: {
        sectionTitle: string;
        sectionList: WorkExperienceItemDataProps[];
    };
}

function WorkExperienceCard({ workExperience }: WorkExperienceCardProps) {
    const workExperiences = workExperience.sectionList.map((workExp) => {
        return <WorkExperienceItem key={workExp.id} workExperienceItemData={workExp} />
    })
    return (
        <div>
            <h2 className="text-2xl mb-4">{workExperience.sectionTitle}</h2>
            {workExperiences}
        </div>
    );
}

export default WorkExperienceCard;
