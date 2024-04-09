import React from 'react';

interface WorkExperienceItemProps {
  workExperienceItem: {
    position: string;
    company: string;
    yearStart: string;
    yearEnd: string;
    isRemote: boolean;
    location: string;
    decription: string;
  };
}

function WorkExperienceItem({ workExperienceItem }: WorkExperienceItemProps) {
  return (
    <div>
      <p>{workExperienceItem.position}</p>
      <p>{workExperienceItem.company}</p>
      <p>{workExperienceItem.yearStart}</p>
      <p>{workExperienceItem.yearEnd}</p>
      <p>{workExperienceItem.isRemote ? 'Remote' : 'On-site'}</p>
      <p>{workExperienceItem.location}</p>
      <p>{workExperienceItem.decription}</p>
      <br />
    </div>
  );
}

export default WorkExperienceItem;
