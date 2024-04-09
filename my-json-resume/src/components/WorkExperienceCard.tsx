import React from 'react';
import WorkExperienceItem from './WorkExperienceItem';

function WorkExperienceCard({ workExperience }) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">{workExperience.sectionTitle}</h2>
            <WorkExperienceItem workExperienceItem={workExperience.sectionList[0]} />
            <WorkExperienceItem workExperienceItem={workExperience.sectionList[1]} />
            <WorkExperienceItem workExperienceItem={workExperience.sectionList[2]} />
            <WorkExperienceItem workExperienceItem={workExperience.sectionList[3]} />
            <WorkExperienceItem workExperienceItem={workExperience.sectionList[4]} />
            <WorkExperienceItem workExperienceItem={workExperience.sectionList[5]} />
        </div>
    );
}

export default WorkExperienceCard;