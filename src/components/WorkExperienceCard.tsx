import React from 'react';
import WorkExperienceItem from './WorkExperienceItem';
import { WorkExperience } from './types';

interface WorkExperienceCardProps {
    workExperience: WorkExperience[];
}

function sortByDate(a: WorkExperience, b: WorkExperience): number {
    const aPresent = a.endDate === null;
    const bPresent = b.endDate === null;
    if (aPresent !== bPresent) return aPresent ? -1 : 1;
    const dateA = aPresent ? a.startDate : a.endDate!;
    const dateB = bPresent ? b.startDate : b.endDate!;
    return dateB.localeCompare(dateA);
}

function WorkExperienceCard({ workExperience }: WorkExperienceCardProps) {
    const items = [...workExperience].sort(sortByDate).map((workExp, index) => (
        <WorkExperienceItem key={index} workExperienceItemData={workExp} />
    ));
    return (
        <div>
            <h3 className="section-title">Work Experience</h3>
            {items}
        </div>
    );
}

export default WorkExperienceCard;
