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
            <p>{spokenLanguagesItemData.language}: {spokenLanguagesItemData.level}</p>
            <br />
        </div>
    );
}

export default SpokenLanguagesItem;