
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
    techHighlights: string[];
    /**
     * Profile slugs this entry should appear in.
     * Absent or empty → shown in every profile route.
     * e.g. ["backend", "ai"] → only in /backend and /ai.
     */
    showInProfiles?: string[];
}

export interface Education {
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

export interface Language {
    language: string;
    fluency: string;
}

export interface Interest {
    name: string;
    summary: string;
    keywords: string[] | null;
}

export interface Project {
    name: string;
    startDate: string;
    endDate: string | null;
    description: string;
    highlights: string[];
    url: string | null;
}

/**
 * One entry in the cv.json `resumeProfiles` map.
 * Slug (the key) drives the route: /backend, /backend-ai, /devops …
 * Adding a new entry here + tagging work entries with showInProfiles
 * is all that's needed to publish a new profile route.
 */
export interface ResumeProfile {
    title: string;
    description?: string;
    /** Skill category names to show; absent = show all. */
    skills?: string[];
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
    /** Custom field: keyed by slug, drives profile routes. */
    resumeProfiles?: Record<string, ResumeProfile>;
}

export default ResumeData;
