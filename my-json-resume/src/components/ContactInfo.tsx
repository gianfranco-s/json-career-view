import React from 'react';

interface contactInfoProps {
    contactInfo: {
        mobilePhone: string;
        email: string;
        LinkedIn: string;
        GitHub: string;
    };
}

function ContactInfo({ contactInfo }: contactInfoProps) {
    return (
        <div>
            <p className="text-gray-600">Telephone icon: {contactInfo.mobilePhone}</p>
            <p className="text-gray-600">Email icon: {contactInfo.email}</p>
            <p className="text-gray-600">LinkedIn icon: {contactInfo.LinkedIn}</p>
            <p className="text-gray-600">GitHub icon: {contactInfo.GitHub}</p>
        </div>
    );
}

export default ContactInfo;