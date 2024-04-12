import React from 'react';
import InterestsItem from './InterestsItem'
import { InterestsItemDataProps } from './InterestsItem';

interface InterestsProps {
    interests: InterestsItemDataProps[];
    };

function InterestsCard({ interests }: InterestsProps) {
    const aboutList = interests.map((aboutItm, index) =>
        <InterestsItem key={index} InterestsItemData={aboutItm}/>)
    return (
        <div>
            <h2 className="text-2xl mb-4">Interests</h2>
            {aboutList}
            <br />
        </div>
    );
}

export default InterestsCard;