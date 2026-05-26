import ResumeData from '@/components/types'
import ResumeHeaderCard from '@/components/ResumeHeaderCard'
import WorkExperienceCard from '@/components/WorkExperienceCard'
import SkillsCard from '@/components/SkillsCard'
import EducationCard from '@/components/EducationCard'
import SpokenLanguagesCard from '@/components/SpokenLanguagesCard'
import InterestsCard from '@/components/InterestsCard'
import ProjectsCard from '@/components/ProjectsCard'
import ProfileSwitcher from '@/components/ProfileSwitcher'

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

  return (
    <div className="container mx-auto px-4 py-8 md:w-2/3">
      {data.resumeProfiles && (
        <ProfileSwitcher
          profiles={data.resumeProfiles}
          activeProfile={activeProfile}
        />
      )}

      <div className="flex justify-center">
        <div className="w-full md:w-1/2">
          <ResumeHeaderCard
            name={data.basics.name}
            resumeTitle={data.basics.label}
            contactInfo={contactInfo} />
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="px-4 pt-4 w-full">
          <ProjectsCard projects={data.projects} />
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="container mx-auto px-4 pt-4 pb-8 w-full md:w-3/4">
          <div className="mb-10">
            <WorkExperienceCard workExperience={data.work} />
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 w-full md:w-1/4">
          <div className="mb-10">
            <SkillsCard skills={data.skills} />
          </div>

          <div className="mb-10">
            <EducationCard education={data.education} />
          </div>

          <div className="mb-10">
            <SpokenLanguagesCard spokenLanguages={data.languages} />
          </div>

          <InterestsCard interests={data.interests} />
        </div>
      </div>
    </div>
  );
};
export default Resume;
