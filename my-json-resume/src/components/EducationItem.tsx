import React from 'react';

export interface EducationItemDataProps {
    educationItemData: {
        title: string;
        yearStart: string;
        yearEnd: string;
        certificateBy: string;
    };
}

function EducationItem({ educationItemData }: EducationItemDataProps) {
    const datesSpan = `${educationItemData.yearStart} - ${educationItemData.yearEnd ? educationItemData.yearEnd : 'Present'}`;
    return (
        <div className="mb-4">
            <h3 className="text-sm font-medium mb-1">{educationItemData.title}</h3>
            <p className="text-sm mb-2">({datesSpan}) {educationItemData.certificateBy}</p>
        </div>
    );
}

export default EducationItem;