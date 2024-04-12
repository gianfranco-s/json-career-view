import React from 'react';

interface SkillsItem {
    name: string;
    level?: string;
    keywords: string[]
}

interface SkillsProps {
    skills: SkillsItem[];
}

function Skills({ skills }: SkillsProps) {
    const skillsLayout = skills.map((skill, index) => (
        <div key={index}>
            <h3 className="text-1xl mt-4">{skill.name}</h3>
            <ul>
                {skill.keywords.map((keyword, keywordIndex) => (
                    <span key={keywordIndex}>{keyword} </span>
                ))}
            </ul>
        </div>
    ))

    return (
        <div>
             <h2 className="text-2xl mb-4">Skills</h2>
            {skillsLayout}
        </div>
    );
}

export default Skills;
