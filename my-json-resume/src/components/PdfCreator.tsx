import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { useState } from 'react'
import { ContactInfo } from './typesCustom';
import { WorkExperience, Skill, Education, Language, Interest } from './types';

pdfMake.vfs = pdfFonts.pdfMake.vfs

interface DownloadPDFProps {
    name: string;
    resumeTitle: string;
    contactInfo: ContactInfo;
    workExperience: WorkExperience[]
    skills: Skill[]
    education: Education[]
    spokenLanguages: Language[]
    interests: Interest[]
}

function DownloadPDF(props: DownloadPDFProps) {
    const workExperiences = props.workExperience.map((work, index) => ({
        name: `${work.name}\n`,
        items: work.highlights.map(item => `- ${item}\n`),
      }));

    const skillsList = props.skills[0].keywords.map(skill => `${skill}`)

    const educations = props.education.map((ed_item, index) => ({
        name: `${ed_item.institution}\n`,
        degree: `${ed_item.area}\n`,
      }));

    const docDefinition = {
        content: [
            { text: props.name, style: 'name' },
            { text: props.resumeTitle, style: 'resumeTitle'},
            { text: props.contactInfo.mobilePhone, style: 'normal'},
            { text: props.contactInfo.email, style: 'normal'},
            { text: props.contactInfo.LinkedIn, style: 'normal'},
            { text: props.contactInfo.GitHub, style: 'normal'},
            {
                columns: [
                    {
                        width: '*',
                        text: [
                            {text: 'Experience\n', style: 'section'},
                            {text: workExperiences[0].name, style: 'normal'},
                            {text: workExperiences[0].items, style: 'normal'},
                            {text: workExperiences[1].name, style: 'normal'},
                            {text: workExperiences[1].items, style: 'normal'},
                            {text: workExperiences[2].name, style: 'normal'},
                            {text: workExperiences[2].items, style: 'normal'},
                            {text: workExperiences[3].name, style: 'normal'},
                            {text: workExperiences[3].items, style: 'normal'},
                            {text: workExperiences[4].name, style: 'normal'},
                            {text: workExperiences[4].items, style: 'normal'},
                            {text: workExperiences[5].name, style: 'normal'},
                            {text: workExperiences[5].items, style: 'normal'},
                        ]
                    },
                    {
                        width: '30%',
                        text: [
                            {text: 'Skills\n', style: 'section'},
                            {text: `${skillsList}\n`, style: 'normal'},
                            {text: 'Education\n', style: 'section'},
                            {text: educations[0].name, style: 'normal'},
                            {text: educations[0].degree, style: 'normal'},
                            {text: educations[1].name, style: 'normal'},
                            {text: educations[1].degree, style: 'normal'},
                            {text: educations[2].name, style: 'normal'},
                            {text: educations[2].degree, style: 'normal'},
                            {text: educations[3].name, style: 'normal'},
                            {text: educations[3].degree, style: 'normal'},
                            {text: educations[4].name, style: 'normal'},
                            {text: educations[4].degree, style: 'normal'},
                            {text: educations[5].name, style: 'normal'},
                            {text: educations[5].degree, style: 'normal'},
                            {text: 'Languages\n', style: 'section'},
                            {text: `${props.spokenLanguages[0].language}\n`, style: 'normal'},
                            {text: `${props.spokenLanguages[1].language}\n`, style: 'normal'},
                            {text: `${props.spokenLanguages[2].language}\n`, style: 'normal'},
                            {text: 'Interests\n', style: 'section'},
                            {text: props.interests[0].name, style: 'normal'},
                            {text: props.interests[0].summary, style: 'normal'},
                            {text: props.interests[1].name, style: 'normal'},
                            {text: props.interests[1].summary, style: 'normal'},
                        ]
                    }
                ],
                columnGap: 10
            }
        ],

        styles: {
            name: {
                fontSize: 26,
                bold: false,
                alignment: 'center',
            },
            resumeTitle: {
                fontSize: 16,
                bold: true,
                alignment: 'center',
            },
            section: {
                fontSize: 16,
                bold: true,
                alignment: 'left',
            },
            normal: {
                fontSize: 9,
                alignment: 'left',
            }
        },
    };

    const [url, setUrl] = useState(null)

    const createPdf = () => {
        const pdfGenerator = pdfMake.createPdf(docDefinition);
        pdfGenerator.download()
    }

    return (
        <button onClick={createPdf}>Download in PDF</button>
    );
}

export default DownloadPDF;