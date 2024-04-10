import React from 'react';

interface AboutItemDataProps {
    aboutItemData: {
        subtitle: string;
        description: string;
    };
}

function AboutItem({ aboutItemData }: AboutItemDataProps) {
    return (
        <div>
            <h3 className="text-sm font-medium mb-1">{aboutItemData.subtitle}</h3>
            <p className="text-sm mb-2">{aboutItemData.description}</p>
        </div>
    );
}

export default AboutItem;