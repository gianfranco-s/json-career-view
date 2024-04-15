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
            <h3 className="text-2xl mb-4">Languages</h3>
            {languagesList}
        </div>
    );
}

export default SpokenLanguagesCard;