import React from 'react';
import Title from '../components/ResumeTitle'
import ContactInfo from '../components/ContactInfo'

interface ResumeHeaderProps {
    name: string;
    resumeTitle: string;
    contactInfo: object;
}

function ResumeHeaderCard({ name, resumeTitle, contactInfo }: ResumeHeaderProps) {
    return (
        <div>
            <Title name={name} resumeTitle={resumeTitle} />
            <div className="mb-5 mt-5">
                <ContactInfo contactInfo={contactInfo} />
            </div>
        </div>
    );
}

export default ResumeHeaderCard;