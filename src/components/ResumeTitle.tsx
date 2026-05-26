import React from 'react';

interface TitleDataProps {
    name: string;
    resumeTitle: string;
}

function Title({ name, resumeTitle }: TitleDataProps) {
    return (
        <div className="text-center">
            <h1 className="text-5xl font-light tracking-tight mb-2">{name}</h1>
            <p className="text-lg text-slate-500 tracking-wide">{resumeTitle}</p>
        </div>
    );
}

export default Title;
