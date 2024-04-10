import React from 'react';

export interface WorkExperienceItemDataProps {
    workExperienceItemData: {
        id: string;
        position: string;
        company: string;
        yearStart: string;
        yearEnd: string;
        isRemote: boolean;
        location: string;
        decription: string[];
    };
}

function WorkExperienceItem({ workExperienceItemData }: WorkExperienceItemDataProps) {
    const datesSpan = `${workExperienceItemData.yearStart} - ${workExperienceItemData.yearEnd ? workExperienceItemData.yearEnd : 'Present'}`;
    const remoteOrOnsite = workExperienceItemData.isRemote ? 'Remote' : 'On-site'
    const additionalData = `${workExperienceItemData.company} | ${datesSpan} | ${remoteOrOnsite} | ${workExperienceItemData.location}`

    return (
        <div>
            <h3 className="text-sm font-medium mb-1">{workExperienceItemData.position}</h3>
            <h4 className="text-xs text-gray-500 mb-2">{additionalData}</h4>
            <ul className="list-disc pl-4 ml-2">
                {workExperienceItemData.decription.map((descrItm, index) => (
                    <li key={index} className="text-sm">{descrItm}</li>
                ))}
            </ul>
            <br />
        </div>
    );
}

export default WorkExperienceItem;
