import React from 'react';
import EducationItem from './EducationItem';
import { Education } from './types';

export interface EducationProps {
    education: Education[];
}

function EducationCard({ education }: EducationProps) {
    return (
        <div>
            <h3 className="section-title">Education</h3>
            {education.map((educ, i) => (
                <EducationItem key={i} educationItemData={educ} />
            ))}
        </div>
    );
}

export default EducationCard;
