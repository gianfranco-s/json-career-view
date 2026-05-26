import ResumeData from '@/components/types'
import ResumeHeaderCard from '@/components/ResumeHeaderCard'
import WorkExperienceCard from '@/components/WorkExperienceCard'
import SkillsCard from '@/components/SkillsCard'
import EducationCard from '@/components/EducationCard'
import SpokenLanguagesCard from '@/components/SpokenLanguagesCard'
import InterestsCard from '@/components/InterestsCard'
import ProjectsCard from '@/components/ProjectsCard'
import ResumeTransition from '@/components/ResumeTransition'
import FadeSection from '@/components/FadeSection'

interface ResumeProps {
  data: ResumeData;
  /** Slug of the active profile, or null for the full (unfiltered) resume. */
  activeProfile: string | null;
}

function Resume({ data, activeProfile }: ResumeProps) {
  const contactInfo = {
    mobilePhone: data.basics.phone,
    email: data.basics.email,
    LinkedIn: data.basics.profiles[0].url,
    GitHub: data.basics.profiles[1].url
  }

  const activeProfileConfig = activeProfile
    ? data.resumeProfiles?.[activeProfile]
    : null

  const showProjects = activeProfileConfig?.showProjects ?? false

  const content = (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-10 mt-4">
        <ResumeHeaderCard
          name={data.basics.name}
          resumeTitle={data.basics.label}
          contactInfo={contactInfo} />
      </div>

      {showProjects && (
        <div className="mb-10">
          <FadeSection><ProjectsCard projects={data.projects} /></FadeSection>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 min-w-0">
          <FadeSection><WorkExperienceCard workExperience={data.work} /></FadeSection>
        </div>

        <div className="w-full md:w-64 shrink-0 space-y-8">
          <SkillsCard skills={data.skills ?? []} />
          <EducationCard education={data.education} />
          <SpokenLanguagesCard spokenLanguages={data.languages} />
          <InterestsCard interests={data.interests} />
        </div>
      </div>
    </div>
  );

  if (!data.resumeProfiles) return content;

  return (
    <ResumeTransition profiles={data.resumeProfiles} activeProfile={activeProfile}>
      {content}
    </ResumeTransition>
  );
}

export default Resume;
