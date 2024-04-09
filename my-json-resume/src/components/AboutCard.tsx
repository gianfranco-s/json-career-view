import React from 'react';
import AboutItem from './AboutItem'

function AboutCard({ about }) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">{about.sectionTitle}</h2>
            <AboutItem aboutItem={about.sectionList[0]}/>
            <AboutItem aboutItem={about.sectionList[1]}/>
            <AboutItem aboutItem={about.sectionList[2]}/>
            <br />
        </div>
    );
}

export default AboutCard;