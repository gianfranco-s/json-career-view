import React from 'react';

interface TitleDataProps {
    titleData: {
        name: string;
        resumeTitle: string;
    }
}

function Title({ titleData }: TitleDataProps) {
    return (
        <div>
            <h1 className="text-center text-3xl mb-4">{titleData.name}</h1>
            <h2 className="text-center font-bold text-lg">{titleData.resumeTitle}</h2>
        </div>
    );
}

export default Title;