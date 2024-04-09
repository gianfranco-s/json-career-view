import React from 'react';
import EducationItem from './EducationItem'

function EducationCard({ education }) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">{education.sectionTitle}</h2>
            <EducationItem educationItem={education.sectionList[0]} />
            <EducationItem educationItem={education.sectionList[1]} />
            <EducationItem educationItem={education.sectionList[2]} />
            <EducationItem educationItem={education.sectionList[3]} />
            <EducationItem educationItem={education.sectionList[4]} />
            <EducationItem educationItem={education.sectionList[5]} />
            <br />
        </div>
    );
}

export default EducationCard;