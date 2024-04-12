import React from 'react';

export interface InterestsItemDataProps {
    InterestsItemData: {
        name: string;
        keywords: string[];
    };
}

function InterestsItem({ InterestsItemData }: InterestsItemDataProps) {
    return (
        <div>
            <h3 className="text-sm font-medium mb-1">{InterestsItemData.name}</h3>
            {/* <p className="text-sm mb-2">{InterestsItemData.keywords}</p> */}
        </div>
    );
}

export default InterestsItem;
