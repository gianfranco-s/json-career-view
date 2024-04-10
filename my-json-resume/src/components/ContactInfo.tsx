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
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${contactInfo.mobilePhone.replace('+', '')}`
    const emailTo = `mailto:${contactInfo.email}`
    const linkedInEndpoint = new URL(contactInfo.LinkedIn).pathname
    const gitHubEndpoint = new URL(contactInfo.GitHub).pathname

    return (
        <div className="grid grid-cols-2 gap-2">
            <a href={whatsappUrl} target="_blank" className="flex items-center text-gray-600">
                <FontAwesomeIcon icon={faPhone} className="h-4 w-4 mr-2" /> {contactInfo.mobilePhone}
            </a>
            <a href={emailTo} className="flex items-center text-gray-600">
                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 mr-2" /> {contactInfo.email}
            </a>
            <a href={contactInfo.LinkedIn} className="flex items-center text-gray-600">
                <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4 mr-2" /> {linkedInEndpoint}
            </a>
            <a href={contactInfo.GitHub} className="flex items-center text-gray-600">
                <FontAwesomeIcon icon={faGithub} className="h-4 w-4 mr-2" /> {gitHubEndpoint}
            </a>
        </div >
    );
}

export default ContactInfo;