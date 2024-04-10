import React from 'react';
import SpokenLanguagesItem from './SpokenLanguagesItem';
import { SpokenLanguagesItemDataProps } from './SpokenLanguagesItem';

interface SpokenLanguagesProps {
    spokenLanguages: {
        sectionTitle: string;
        sectionList: SpokenLanguagesItemDataProps[];
    };
}

function SpokenLanguagesCard({ spokenLanguages }: SpokenLanguagesProps) {
    const languagesList = spokenLanguages.sectionList.map((lang, index) =>
        <SpokenLanguagesItem spokenLanguagesItemData={lang} />)
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">{spokenLanguages.sectionTitle}</h2>
            {languagesList}
            <br />
        </div>
    );
}

export default SpokenLanguagesCard;