import React from 'react';
import EducationItem from './EducationItem'
import { Education } from './types';

export interface EducationProps {
    education: Education[];
}

function EducationCard({ education }: EducationProps) {
    const educationList = education.map((educ, index) => (
        <EducationItem key={index} educationItemData={educ} />
    ))
    return (
        <div>
            <h3 className="text-2xl mb-4">Education</h3>
            {educationList}
        </div>
    );
}

export default EducationCard;
