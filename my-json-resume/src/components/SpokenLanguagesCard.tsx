import React from 'react';
import SpokenLanguagesItem from './SpokenLanguagesItem';
import { Language } from './types';

interface SpokenLanguagesProps {
    spokenLanguages: Language[];
};

function SpokenLanguagesCard({ spokenLanguages }: SpokenLanguagesProps) {
    const languagesList = spokenLanguages.map((lang, index) =>
        <SpokenLanguagesItem key={index} spokenLanguagesItemData={lang} />)
    return (
        <div>
            <h2 className="text-2xl mb-4">Languages</h2>
            {languagesList}
        </div>
    );
}

export default SpokenLanguagesCard;