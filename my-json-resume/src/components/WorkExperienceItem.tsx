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
    return (
        <div>
            <p>{workExperienceItemData.position}</p>
            <p>{workExperienceItemData.company}</p>
            <p>{workExperienceItemData.yearStart}</p>
            <p>{workExperienceItemData.yearEnd}</p>
            <p>{workExperienceItemData.isRemote ? 'Remote' : 'On-site'}</p>
            <p>{workExperienceItemData.location}</p>
            <p>{workExperienceItemData.decription}</p>
            <br />
        </div>
    );
}

export default WorkExperienceItem;
