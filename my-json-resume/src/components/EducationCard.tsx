import React from 'react';
import EducationItem from './EducationItem'
import { EducationItemDataProps } from './EducationItem';

export interface EducationProps {
    education: {
        sectionTitle: string;
        sectionList: EducationItemDataProps[];
    };
}

function EducationCard({ education }: EducationProps) {
    const educationList = education.sectionList.map((educ, index) => (
        <EducationItem key={index} educationItemData={educ} />
    ))
    return (
        <div>
            <h2 className="text-2xl mb-4">{education.sectionTitle}</h2>
            {educationList}
        </div>
    );
}

export default EducationCard;