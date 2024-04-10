import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


interface ContactInfoProps {
    contactInfo: {
        mobilePhone: string;
        email: string;
        LinkedIn: string;
        GitHub: string;
    };
}

function ContactInfo({ contactInfo }: ContactInfoProps) {
    return (
        <div className="grid grid-cols-2 gap-2">
            <p className="flex items-center text-gray-600">
                <FontAwesomeIcon icon={faPhone} className="h-4 w-4 mr-2" /> {contactInfo.mobilePhone}
            </p>
            <p className="flex items-center text-gray-600">
                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 mr-2" /> {contactInfo.email}
            </p>
            <p className="flex items-center text-gray-600">
                <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4 mr-2" /> {contactInfo.LinkedIn}
            </p>
            <p className="flex items-center text-gray-600">
                <FontAwesomeIcon icon={faGithub} className="h-4 w-4 mr-2" /> {contactInfo.GitHub}
            </p>
        </div>
    );
}

export default ContactInfo;