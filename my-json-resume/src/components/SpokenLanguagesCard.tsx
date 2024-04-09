import React from 'react';
import SpokenLanguagesItem from './SpokenLanguagesItem';

function SpokenLanguagesCard({ spokenLanguages }) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">{spokenLanguages.sectionTitle}</h2>
            <SpokenLanguagesItem spokenLanguagesItem={spokenLanguages.sectionList[0]}/>
            <SpokenLanguagesItem spokenLanguagesItem={spokenLanguages.sectionList[1]}/>
            <SpokenLanguagesItem spokenLanguagesItem={spokenLanguages.sectionList[2]}/>
            <br />
        </div>
    );
}

export default SpokenLanguagesCard;