import React from 'react';

function WorkExperience({ workExperienceItem }) {
    return (
        <div>
            <p>{workExperienceItem.position}</p>
            <p>{workExperienceItem.company}</p>
            <p>{workExperienceItem.yearStart}</p>
            <p>{workExperienceItem.yearEnd}</p>
            <p>{workExperienceItem.isRemote}</p>
            <p>{workExperienceItem.location}</p>
            <p>{workExperienceItem.decription}</p>
            <br />
        </div>
    );
}

export default WorkExperience;