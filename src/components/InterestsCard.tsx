import React from 'react';
import { Interest } from './types';

interface InterestsProps {
    interests: Interest[];
}

function InterestsCard({ interests }: InterestsProps) {
    return (
        <div>
            <h3 className="section-title">Interests</h3>
            <div className="space-y-3">
                {interests.map((item, i) => (
                    <div key={i}>
                        <p className="text-sm font-medium text-slate-700">{item.name}</p>
                        <p className="text-xs text-slate-500 leading-relaxed">{item.summary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InterestsCard;
