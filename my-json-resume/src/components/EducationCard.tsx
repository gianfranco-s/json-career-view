import React from 'react';
import EducationItem from './EducationItem'
import { EducationItemDataProps } from './EducationItem';

export interface EducationProps {
    education: EducationItemDataProps[];
}

function EducationCard({ education }: EducationProps) {
    const educationList = education.map((educ, index) => (
        <EducationItem key={index} educationItemData={educ} />
    ))
    return (
        <div>
            <h2 className="text-2xl mb-4">Education</h2>
            {educationList}
        </div>
    );
}

export default EducationCard;
