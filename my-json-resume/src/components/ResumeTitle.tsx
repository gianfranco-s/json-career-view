import React from 'react';

function Title({ titleData }) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">{titleData.name}</h2>
            <p className="text-gray-600">{titleData.resumeTitle}</p>
        </div>
    );
}

export default Title;