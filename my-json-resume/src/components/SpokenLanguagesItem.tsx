import React from 'react';

export interface SpokenLanguagesItemDataProps {
    spokenLanguagesItemData: {
        language: string;
        fluency: string;
    };
}

function SpokenLanguagesItem({ spokenLanguagesItemData }: SpokenLanguagesItemDataProps) {
    return (
        <div>
            <p className="text-sm mb-2">{spokenLanguagesItemData.language}: {spokenLanguagesItemData.fluency}</p>
        </div>
    );
}

export default SpokenLanguagesItem;
