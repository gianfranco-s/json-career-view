import React from 'react';

function Skills({ skills }) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">{skills.sectionTitle}</h2>
            <p className="text-gray-600">
                {skills.sectionList[0]}-
                {skills.sectionList[1]}-
                {skills.sectionList[2]}-
                {skills.sectionList[3]}-
                {skills.sectionList[4]}-
                {skills.sectionList[5]}-
                {skills.sectionList[6]}-
                {skills.sectionList[7]}-
                {skills.sectionList[8]}
                ...
            </p>
            <br />
        </div>
    );
}

export default Skills;