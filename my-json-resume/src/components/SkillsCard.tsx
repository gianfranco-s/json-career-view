import React from 'react';

interface SkillsProps {
    skills: {
        sectionTitle: string;
        sectionList: string[];
    };
}

function Skills({ skills }: SkillsProps) {
    const skillsList = skills.sectionList.map((skill, index) => (
        <span key={index}>{skill} </span>
    ))
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">{skills.sectionTitle}</h2>
            {skillsList}
        </div>
    );
}

export default Skills;