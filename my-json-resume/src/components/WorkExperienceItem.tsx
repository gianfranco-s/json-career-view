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
        decription: string;
    };
}

function WorkExperienceItem({ workExperienceItemData }: WorkExperienceItemDataProps) {
    const datesSpan = `${workExperienceItemData.yearStart} - ${workExperienceItemData.yearEnd ? workExperienceItemData.yearEnd : 'Present'}`;
    const remoteOrOnsite = workExperienceItemData.isRemote ? 'Remote' : 'On-site'
    const additionalData = `${datesSpan} | ${remoteOrOnsite} | ${workExperienceItemData.location}`

    return (
        <div>
            <h3>{workExperienceItemData.position}</h3>
            <h4>{workExperienceItemData.company}</h4>
            <span>{additionalData}</span>
            <p>{workExperienceItemData.decription}</p>
            <br />
        </div>
    );
}

export default WorkExperienceItem;
