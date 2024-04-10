import React from 'react';

interface titleDataProps {
    titleData: {
        name: string;
        resumeTitle: string;
    }
}

function Title({ titleData }: titleDataProps) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">{titleData.name}</h2>
            <p className="text-gray-600">{titleData.resumeTitle}</p>
        </div>
    );
}

export default Title;