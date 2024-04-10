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
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">{workExperience.sectionTitle}</h2>
            <WorkExperienceItem workExperienceItemData={workExperience.sectionList[0]}/>
            <WorkExperienceItem workExperienceItemData={workExperience.sectionList[1]} />
            <WorkExperienceItem workExperienceItemData={workExperience.sectionList[2]} />
            <WorkExperienceItem workExperienceItemData={workExperience.sectionList[3]} />
            <WorkExperienceItem workExperienceItemData={workExperience.sectionList[4]} />
            <WorkExperienceItem workExperienceItemData={workExperience.sectionList[5]} />
        </div>
    );
}

export default WorkExperienceCard;
