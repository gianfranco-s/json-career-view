import React from 'react';
import AboutItem from './AboutItem'

interface AboutProps {
    about: {
        sectionTitle: string;
        sectionList: AboutItemDataProps[];
    };
}

function AboutCard({ about }: AboutProps) {
    const aboutList = about.sectionList.map((aboutItm, index) =>
        <AboutItem aboutItemData={aboutItm}/>)
    return (
        <div>
            <h2 className="text-2xl mb-4">{about.sectionTitle}</h2>
            {aboutList}
            <br />
        </div>
    );
}

export default AboutCard;