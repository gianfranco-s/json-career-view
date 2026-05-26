import React from 'react';
import { Language } from './types';

interface SpokenLanguagesProps {
    spokenLanguages: Language[];
}

function SpokenLanguagesCard({ spokenLanguages }: SpokenLanguagesProps) {
    return (
        <div>
            <h3 className="section-title">Languages</h3>
            <div className="space-y-1">
                {spokenLanguages.map((lang, i) => (
                    <div key={i} className="flex justify-between text-sm">
                        <span className="text-slate-700">{lang.language}</span>
                        <span className="text-slate-400">{lang.fluency}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SpokenLanguagesCard;
