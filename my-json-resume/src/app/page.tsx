import resumeData from '../data/cv_python_dev.json'
import Title from '../components/ResumeTitle'
import ContactInfo from '../components/ContactInfo'
import WorkExperienceCard from '../components/WorkExperienceCard'
import SkillsCard from '../components/SkillsCard'
import EducationCard from '../components/EducationCard'
import SpokenLanguagesCard from '../components/SpokenLanguagesCard'

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Title titleData={resumeData.titleData} />
      <ContactInfo contactInfo={resumeData.contactInfo} />
      <WorkExperienceCard workExperience={resumeData.workExperience}/>
      <SkillsCard skills={resumeData.skills}/>
      <EducationCard education={resumeData.education}/>
      <SpokenLanguagesCard spokenLanguages={resumeData.spokenLanguages} />

      {/* About Section */}
      <h2 className="text-2xl font-bold mb-4">{resumeData.about.sectionTitle}</h2>
      <h3 className="text-1xl font-bold mb-4">{resumeData.about.sectionList[0].subtitle}</h3>
      <p>{resumeData.about.sectionList[0].description}</p>
      <h3 className="text-1xl font-bold mb-4">{resumeData.about.sectionList[1].subtitle}</h3>
      <p>{resumeData.about.sectionList[1].description}</p>
      <h3 className="text-1xl font-bold mb-4">{resumeData.about.sectionList[2].subtitle}</h3>
      <p>{resumeData.about.sectionList[2].description}</p>

    </div>
  );
};
export default Home;