import resumeData from '../data/cv_python_dev.json'
import Title from '../components/ResumeTitle'
import ContactInfo from '../components/ContactInfo'
import WorkExperienceCard from '../components/WorkExperienceCard'
import SkillsCard from '../components/SkillsCard'
import EducationCard from '../components/EducationCard'
import SpokenLanguagesCard from '../components/SpokenLanguagesCard'
import AboutCard from '../components/AboutCard'

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8 border">

      <div className="flex justify-center border">
        <div className="w-full md:w-1/2"> {/* Center title and contact info */}
          <Title titleData={resumeData.titleData} />
          <div className="mb-5 mt-5">
            <ContactInfo contactInfo={resumeData.contactInfo} />
          </div>
        </div>
      </div>


      <div className="container mx-auto px-4 py-8 border">
        <div className="mb-10">
          <WorkExperienceCard workExperience={resumeData.workExperience} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 border">
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
      </div>
    </div>
  );
};
export default Home;