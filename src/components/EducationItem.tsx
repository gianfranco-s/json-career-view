import React from 'react';
import { Education } from './types';

export interface EducationItemDataProps {
    educationItemData: Education;
}

function EducationItem({ educationItemData }: EducationItemDataProps) {
    const startYear = new Date(educationItemData.startDate).getFullYear();
    const endYear = educationItemData.endDate
        ? new Date(educationItemData.endDate).getFullYear()
        : 'Present';

    const title = (
        <p className="text-sm font-medium text-slate-700 leading-snug">
            {educationItemData.area}
        </p>
    );

    return (
        <div className="mb-3">
            {educationItemData.url
                ? <a href={educationItemData.url} target="_blank" rel="noopener noreferrer"
                     className="hover:underline underline-offset-2">
                    {title}
                  </a>
                : title
            }
            <p className="text-xs text-slate-400">
                {educationItemData.institution} · {startYear}–{endYear}
            </p>
        </div>
    );
}

export default EducationItem;
