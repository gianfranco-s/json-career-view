import React from 'react';
import { Skill } from './types';


interface SkillsProps {
    skills: Skill[];
}

function Skills({ skills }: SkillsProps) {
    const skillsLayout = skills.map((skill, index) => (
        <div key={index}>
            <h4 className="text-sm font-medium mt-4">{skill.name}</h4>
            <ul>
                {skill.keywords.map((keyword, keywordIndex) => (
                    <span key={keywordIndex}>{keyword} </span>
                ))}
            </ul>
        </div>
    ))

    return (
        <div>
            <h3 className="text-2xl mb-4">Skills</h3>
            {skillsLayout}
        </div>
    );
}

export default Skills;
