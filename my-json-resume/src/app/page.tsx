import resumeData from '../data/base_cv.json'
import ResumeHeaderCard from '../components/ResumeHeaderCard'
import WorkExperienceCard from '../components/WorkExperienceCard'
import SkillsCard from '../components/SkillsCard'
import EducationCard from '../components/EducationCard'
import SpokenLanguagesCard from '../components/SpokenLanguagesCard'
import AboutCard from '../components/AboutCard'

const Home = () => {
  const contactInfo = {
      mobilePhone: resumeData.basics.phone,
      email: resumeData.basics.email,
      LinkedIn: resumeData.basics.profiles[0].url,
      GitHub: resumeData.basics.profiles[1].url
  }

  const workExperience = resumeData.work

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center">
        <div className="w-full md:w-1/2">
          <ResumeHeaderCard
            name={resumeData.basics.name}
            resumeTitle={resumeData.basics.label}
            contactInfo={contactInfo} />
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="container mx-auto px-4 py-8 w-full md:w-1/2">
          <div className="mb-10">
            <WorkExperienceCard workExperience={workExperience} />
          </div>
        </div>

        {/* <div className="container mx-auto px-4 py-8  w-full md:w-1/2 ">
          <div className="mb-10">
            <SkillsCard skills={resumeData.skills} />
          </div>
          <div className="mb-10">
            <EducationCard education={resumeData.education} />
          </div>
          <div className="mb-10">
            <SpokenLanguagesCard spokenLanguages={resumeData.spokenLanguages} />
          </div>

          <AboutCard about={resumeData.about} />
        </div> */}
      </div>
    </div>
  );
};
export default Home;