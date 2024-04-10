import React from 'react';

export interface SpokenLanguagesItemDataProps {
    spokenLanguagesItemData: {
        language: string;
        level: string;
    };
}

function SpokenLanguagesItem({ spokenLanguagesItemData }: SpokenLanguagesItemDataProps) {
    return (
        <div>
            <p className="text-sm mb-2">{spokenLanguagesItemData.language}: {spokenLanguagesItemData.level}</p>
        </div>
    );
}

export default SpokenLanguagesItem;