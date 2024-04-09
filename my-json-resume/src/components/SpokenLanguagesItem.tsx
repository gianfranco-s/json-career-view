import React from 'react';

function SpokenLanguagesItem({ spokenLanguagesItem }) {
    return (
        <div>
            <p>{spokenLanguagesItem.language}: {spokenLanguagesItem.level}</p>
            <br />
        </div>
    );
}

export default SpokenLanguagesItem;