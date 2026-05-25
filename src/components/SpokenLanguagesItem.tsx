import React from 'react';
import { Language } from './types';

export interface SpokenLanguagesItemDataProps {
    spokenLanguagesItemData: Language;
}

function SpokenLanguagesItem({ spokenLanguagesItemData }: SpokenLanguagesItemDataProps) {
    return (
        <div>
            <p className="text-sm mb-2">{spokenLanguagesItemData.language}: {spokenLanguagesItemData.fluency}</p>
        </div>
    );
}

export default SpokenLanguagesItem;
