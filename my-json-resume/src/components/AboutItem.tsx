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
            <h3 className="text-1xl font-bold mb-4">{aboutItemData.subtitle}</h3>
            <p>{aboutItemData.description}</p>
        </div>
    );
}

export default AboutItem;