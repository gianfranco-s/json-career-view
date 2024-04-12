import React from 'react';

export interface WorkExperienceItemDataProps {
    workExperienceItemData: {
        name: string;
        position: string;
        url: string;
        startDate: string;
        endDate: string;
        isRemote: boolean;
        location: string;
        summary: string;
        highlights: string[]
    };
}

function WorkExperienceItem({ workExperienceItemData }: WorkExperienceItemDataProps) {
    const datesSpan = `${workExperienceItemData.startDate} - ${workExperienceItemData.endDate ? workExperienceItemData.endDate : 'Present'}`;
    const remoteOrOnsite = workExperienceItemData.isRemote ? 'Remote' : 'On-site'
    const additionalData = `${workExperienceItemData.name} | ${datesSpan} | ${remoteOrOnsite} | ${workExperienceItemData.location}`

    // Splitting summary text at each '.' character
    const summarySentences = workExperienceItemData.summary.split('.').filter(sentence => sentence.trim() !== '');

    return (
        <div className="mb-4">
            <h3 className="text-sm font-medium mb-1">{workExperienceItemData.position}</h3>
            <h4 className="text-xs text-gray-500 mb-2">{additionalData}</h4>
            <ul className="list-disc pl-4 ml-2">
                {summarySentences.map((sentence, index) => (
                    <li key={index}>{sentence.trim()}</li>
                ))}
            </ul>
        </div>
    );
}

export default WorkExperienceItem;
