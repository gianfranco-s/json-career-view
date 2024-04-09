import React from 'react';

function AboutItem({ aboutItem }) {
    return (
        <div>
            <h3 className="text-1xl font-bold mb-4">{aboutItem.subtitle}</h3>
            <p>{aboutItem.description}</p>
        </div>
    );
}

export default AboutItem;