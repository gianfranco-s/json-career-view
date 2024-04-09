import React from 'react';

function EducationItem({ educationItem }) {
    return (
        <div>
            <h1 className="text-1xl font-bold mb-4">{educationItem.title}</h1>
            <p>{educationItem.yearStart} {educationItem.yearEnd}</p>
            <p>{educationItem.certificateBy}</p>
            <br />
        </div>
    );
}

export default EducationItem;