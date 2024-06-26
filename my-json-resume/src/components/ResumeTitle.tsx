import React from 'react';

interface TitleDataProps {
    name: string;
    resumeTitle: string;
}

function Title({ name, resumeTitle }: TitleDataProps) {
    return (
        <div>
            <h1 className="text-center text-6xl mb-4">{name}</h1>
            <h2 className="text-center text-4xl">{resumeTitle}</h2>
        </div>
    );
}

export default Title;