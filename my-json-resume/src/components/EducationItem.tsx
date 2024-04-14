import React from 'react';
import { Education } from './types';

export interface EducationItemDataProps {
    educationItemData: Education;
}

function EducationItem({ educationItemData }: EducationItemDataProps) {
    const startYear = new Date(educationItemData.startDate).getFullYear();
    const endYear = educationItemData.endDate ? new Date(educationItemData.endDate).getFullYear() : 'Present';
    const yearSpan = `${startYear} - ${endYear}`;
    return (
        <div className="mb-4">
            <h3 className="text-sm font-medium mb-1">{educationItemData.area}</h3>
            <p className="text-sm mb-2">({yearSpan}) {educationItemData.institution}</p>
        </div>
    );
}

export default EducationItem;
