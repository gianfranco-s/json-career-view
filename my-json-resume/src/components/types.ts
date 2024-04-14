
interface Location {
    city: string;
    countryCode: string;
    region: string;
}

interface Profile {
    network: string;
    username: string;
    url: string;
}

export interface WorkExperience {
    name: string;
    position: string;
    url: string | null;
    startDate: string;
    endDate: string | null;
    summary: string;
    isRemote: boolean;
    location: string;
    highlights: string[];
}

interface Education {
    institution: string;
    url: string | null;
    area: string;
    studyType: string | null;
    startDate: string;
    endDate: string | null;
}

interface Certificate {
    name: string;
    date: string;
    issuer: string;
    url: string;
}

interface Publication {
    name: string;
    publisher: string;
    releaseDate: string | null;
    url: string | null;
    summary: string;
}

export interface Skill {
    name: string;
    level: string | null;
    keywords: string[];
}

interface Language {
    language: string;
    fluency: string;
}

interface Interest {
    name: string;
    keywords: string[] | null;
}

interface Project {
    name: string;
    startDate: string;
    endDate: string | null;
    description: string;
    highlights: string[];
    url: string | null;
}

interface ResumeData {
    basics: {
        name: string;
        label: string;
        image: string;
        email: string;
        phone: string;
        url: string;
        summary: string;
        location: Location;
        profiles: Profile[];
    };
    work: WorkExperience[];
    volunteer: null;
    education: Education[];
    awards: null;
    certificates: Certificate[] | null;
    publications: Publication[];
    skills: Skill[];
    languages: Language[];
    interests: Interest[];
    references: null;
    projects: Project[];
}

export default ResumeData;
