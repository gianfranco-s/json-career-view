import React from 'react';
import { Skill } from './types';

interface SkillsProps {
    skills: Skill[];
}

function SkillsCard({ skills }: SkillsProps) {
    return (
        <div>
            <h3 className="section-title">Skills</h3>
            {skills.map((skill, i) => (
                <div key={i} className="mb-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">
                        {skill.name}
                    </p>
                    <div className="flex flex-wrap gap-1">
                        {skill.keywords.map((kw, j) => (
                            <span key={j} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                                {kw}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SkillsCard;
