import React from 'react';
import { Interest } from './types';

export interface InterestsItemDataProps {
    InterestsItemData: Interest;
}

function InterestsItem({ InterestsItemData }: InterestsItemDataProps) {
    return (
        <div>
            <p className="text-sm font-medium mb-1">{InterestsItemData.name}</p>
            <p className="text-sm mb-2">{InterestsItemData.summary}</p>
        </div>
    );
}

export default InterestsItem;
