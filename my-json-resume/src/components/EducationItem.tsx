import React from 'react';

interface EducationItemDataProps {
    educationItemData: {
        title: string;
        yearStart: string;
        yearEnd: string;
        certificateBy: string;
    };
}

function EducationItem({ educationItemData }: EducationItemDataProps) {
    return (
        <div>
            <h1 className="text-1xl font-bold mb-4">{educationItemData.title}</h1>
            <p>{educationItemData.yearStart} {educationItemData.yearEnd}</p>
            <p>{educationItemData.certificateBy}</p>
            <br />
        </div>
    );
}

export default EducationItem;