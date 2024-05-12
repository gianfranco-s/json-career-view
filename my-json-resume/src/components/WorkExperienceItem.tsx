import React from 'react';
import { WorkExperience } from './types';

export interface WorkExperienceItemDataProps {
    workExperienceItemData: WorkExperience;
}

function WorkExperienceItem({ workExperienceItemData }: WorkExperienceItemDataProps) {
    const startYear = new Date(workExperienceItemData.startDate).getFullYear();
    const endYear = workExperienceItemData.endDate ? new Date(workExperienceItemData.endDate).getFullYear() : 'Present';
    const yearSpan = `${startYear} - ${endYear}`;
    const remoteOrOnsite = workExperienceItemData.isRemote ? 'Remote' : 'On-site'
    const additionalData = `${workExperienceItemData.name} | ${yearSpan} | ${remoteOrOnsite} | ${workExperienceItemData.location}`

    const summarySentences = workExperienceItemData.highlights.filter(sentence => !sentence.startsWith('techHighlights'))
    // const techHighlights = workExperienceItemData.highlights.filter(sentence => sentence.startsWith('techHighlights'))

    return (
        <div className="mb-4">
            <h4 className="text-sm font-medium mb-1">{workExperienceItemData.position}</h4>
            <h5 className="text-xs text-gray-500 mb-2">{additionalData}</h5>
            <p>{workExperienceItemData.summary}</p>
            <ul className="list-disc pl-4 ml-2">
                {summarySentences.map((sentence, index) => (
                    <li key={index}>{sentence.trim()}</li>
                ))}
            </ul>
        </div>
    );
}

export default WorkExperienceItem;
