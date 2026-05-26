import React from 'react';
import { WorkExperience } from './types';

export interface WorkExperienceItemDataProps {
    workExperienceItemData: WorkExperience;
}

function WorkExperienceItem({ workExperienceItemData }: WorkExperienceItemDataProps) {
    const startYear = new Date(workExperienceItemData.startDate).getFullYear();
    const endYear = workExperienceItemData.endDate
        ? new Date(workExperienceItemData.endDate).getFullYear()
        : 'Present';
    const remoteOrOnsite = workExperienceItemData.isRemote ? 'Remote' : 'On-site';
    const meta = `${workExperienceItemData.name} · ${startYear}–${endYear} · ${remoteOrOnsite} · ${workExperienceItemData.location}`;

    const highlights = workExperienceItemData.highlights.filter(
        s => !s.startsWith('techHighlights')
    );

    return (
        <div className="mb-7">
            <div className="flex items-baseline justify-between gap-2 mb-0.5">
                <h4 className="font-semibold text-slate-800">{workExperienceItemData.position}</h4>
                <span className="text-xs text-slate-400 whitespace-nowrap shrink-0">
                    {startYear}–{endYear}
                </span>
            </div>
            <p className="text-xs text-slate-400 mb-2">{workExperienceItemData.name} · {remoteOrOnsite} · {workExperienceItemData.location}</p>

            {workExperienceItemData.summary && (
                <p className="text-sm text-slate-600 mb-2">{workExperienceItemData.summary}</p>
            )}

            {highlights.length > 0 && (
                <ul className="list-disc pl-4 space-y-0.5 mb-2">
                    {highlights.map((s, i) => (
                        <li key={i} className="text-sm text-slate-600">{s.trim()}</li>
                    ))}
                </ul>
            )}

            {workExperienceItemData.techHighlights && workExperienceItemData.techHighlights.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                    {workExperienceItemData.techHighlights.map((tech, i) => (
                        <span key={i} className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

export default WorkExperienceItem;
