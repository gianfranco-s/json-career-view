import React from 'react';
import Title from '../components/ResumeTitle'
import ContactInfoCard from './ContactInfoCard'
import { ContactInfo } from './typesHybrid';

interface ResumeHeaderProps {
    name: string;
    resumeTitle: string;
    contactInfo: ContactInfo;
}

function ResumeHeaderCard({ name, resumeTitle, contactInfo }: ResumeHeaderProps) {
    return (
        <div>
            <Title name={name} resumeTitle={resumeTitle} />
            <div className="mb-5 mt-5">
                <ContactInfoCard contactInfo={contactInfo} />
            </div>
        </div>
    );
}

export default ResumeHeaderCard;