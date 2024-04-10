import React from 'react';
import WorkExperienceItem from './WorkExperienceItem';
import { WorkExperienceItemDataProps } from './WorkExperienceItem';

interface WorkExperienceCardProps {
    workExperience: {
        sectionTitle: string;
        sectionList: WorkExperienceItemDataProps[];
    };
}

function WorkExperienceCard({ workExperience }: WorkExperienceCardProps) {
    const workExperiences = workExperience.sectionList.map(workExp => {
        return <WorkExperienceItem workExperienceItemData={workExp} />
    })
    return (
        <div>
            <h2 className="text-2xl mb-4">{workExperience.sectionTitle}</h2>
            {workExperiences}
        </div>
    );
}

export default WorkExperienceCard;
