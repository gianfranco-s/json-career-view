import React from 'react';
import WorkExperienceItem from './WorkExperienceItem';
import { WorkExperience } from './types';

interface WorkExperienceCardProps {
    workExperience: WorkExperience[];
}

function sortByDate(a: WorkExperience, b: WorkExperience): number {
    const aPresent = a.endDate === null;
    const bPresent = b.endDate === null;
    if (aPresent !== bPresent) return aPresent ? -1 : 1;
    const dateA = aPresent ? a.startDate : a.endDate!;
    const dateB = bPresent ? b.startDate : b.endDate!;
    return dateB.localeCompare(dateA);
}

function WorkExperienceCard({ workExperience }: WorkExperienceCardProps) {
    const sorted = [...workExperience].sort(sortByDate);
    const main  = sorted.filter(w => !w.minorRole);
    const minor = sorted.filter(w =>  w.minorRole);

    return (
        <div>
            <h3 className="section-title">Work Experience</h3>

            {main.map((w, i) => (
                <WorkExperienceItem key={i} workExperienceItemData={w} />
            ))}

            {minor.length > 0 && (
                <details className="mt-2 group">
                    <summary className="cursor-pointer list-none text-sm text-slate-400 hover:text-slate-600 transition-colors select-none mb-3">
                        <span className="group-open:hidden">+ {minor.length} other role{minor.length > 1 ? 's' : ''}</span>
                        <span className="hidden group-open:inline">− hide</span>
                    </summary>
                    {minor.map((w, i) => (
                        <WorkExperienceItem key={i} workExperienceItemData={w} />
                    ))}
                </details>
            )}
        </div>
    );
}

export default WorkExperienceCard;
