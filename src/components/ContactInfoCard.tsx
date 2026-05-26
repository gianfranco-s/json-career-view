import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { ContactInfo } from './typesCustom';

interface ContactInfoProps {
    contactInfo: ContactInfo;
}

function ContactInfoCard({ contactInfo }: ContactInfoProps) {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${contactInfo.mobilePhone.replace('+', '')}`
    const emailTo = `mailto:${contactInfo.email}`
    const linkedInEndpoint = new URL(contactInfo.LinkedIn).pathname
    const gitHubEndpoint = new URL(contactInfo.GitHub).pathname

    const linkClass = "flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition-colors"

    return (
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <FontAwesomeIcon icon={faPhone} className="h-3.5 w-3.5" />
                {contactInfo.mobilePhone}
            </a>
            <a href={emailTo} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <FontAwesomeIcon icon={faEnvelope} className="h-3.5 w-3.5" />
                {contactInfo.email}
            </a>
            <a href={contactInfo.LinkedIn} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <FontAwesomeIcon icon={faLinkedin} className="h-3.5 w-3.5" />
                {linkedInEndpoint}
            </a>
            <a href={contactInfo.GitHub} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <FontAwesomeIcon icon={faGithub} className="h-3.5 w-3.5" />
                {gitHubEndpoint}
            </a>
        </div>
    );
}

export default ContactInfoCard;
