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
        name: work.name,
        items: work.highlights.map(item => `- ${item}\n`),
      }));

    const skillsList = props.skills.map(skill => ({
        name: skill.name,
        keywords: skill.keywords,
    }))
    
    const skillsToDoc = skillsList.flatMap(skl => [
        // {text: `${skl.name}\n`, style: 'subsection'},
        {text: `${skl.keywords}\n\n`, style: 'normal'}
    ])

    const educations = props.education.map((ed_item, index) => ({
        name: `${ed_item.institution}\n`,
        degree: `${ed_item.area}\n\n`,
      }));

    const educationsToDoc = educations.flatMap(ed => [
        {text: ed.name, style: 'subsection'},
        {text: ed.degree, style: 'normal'}
    ])

    const workExpToDoc = workExperiences.flatMap(workExp => [
        {text: `${workExp.name}\n`, style: 'subsection'},
        {text: `${workExp.items}\n`, style: 'normal'}
    ])

    const languagesToDoc = props.spokenLanguages.flatMap(lang => [
        {text: `${lang.language}: ${lang.fluency}\n\n`, style: 'normal'}
    ])

    const interestsToDoc = props.interests.flatMap(intst => [
        {text: `${intst.name}\n`, style: 'subsection'},
        {text: `${intst.summary}\n\n`, style: 'normal'}
    ])

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
                            ...workExpToDoc
                        ]
                    },
                    {
                        width: '30%',
                        text: [
                            {text: 'Skills\n', style: 'section'},
                            ...skillsToDoc,
                            {text: 'Education\n', style: 'section'},
                            ...educationsToDoc,
                            {text: 'Languages\n', style: 'section'},
                            ...languagesToDoc,
                            {text: 'Interests\n', style: 'section'},
                            ...interestsToDoc
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
            subsection: {
                fontSize: 9,
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