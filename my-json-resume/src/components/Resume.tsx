import resumeData from '@/data/base_cv.json'
import ResumeHeaderCard from '@/components/ResumeHeaderCard'
import WorkExperienceCard from '@/components/WorkExperienceCard'
import SkillsCard from '@/components/SkillsCard'
import EducationCard from '@/components/EducationCard'
import SpokenLanguagesCard from '@/components/SpokenLanguagesCard'
import InterestsCard from '@/components/InterestsCard'

function Resume() {
  const contactInfo = {
    mobilePhone: resumeData.basics.phone,
    email: resumeData.basics.email,
    LinkedIn: resumeData.basics.profiles[0].url,
    GitHub: resumeData.basics.profiles[1].url
  }

  return (
    <div className="container mx-auto px-4 py-8 md:w-2/3">
      <div className="flex justify-center">
        <div className="w-full md:w-1/2">
          <ResumeHeaderCard
            name={resumeData.basics.name}
            resumeTitle={resumeData.basics.label}
            contactInfo={contactInfo} />
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="container mx-auto px-4 pt-4 pb-8 w-full md:w-3/4">
          <div className="mb-10">
            <WorkExperienceCard workExperience={resumeData.work} />
          </div>
        </div>

        <div className="container mx-auto px-4 py-8  w-full md:w-1/4 ">
          <div className="mb-10">
            <SkillsCard skills={resumeData.skills} />
          </div>

          <div className="mb-10">
            <EducationCard education={resumeData.education} />
          </div>

          <div className="mb-10">
            <SpokenLanguagesCard spokenLanguages={resumeData.languages} />
          </div>

          <InterestsCard interests={resumeData.interests} />
        </div>
      </div>
    </div>
  );
};
export default Resume;