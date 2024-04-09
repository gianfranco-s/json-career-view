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
    <div className="container mx-auto px-4 py-8">
      <Title titleData={resumeData.titleData} />
      <ContactInfo contactInfo={resumeData.contactInfo} />
      <WorkExperienceCard workExperience={resumeData.workExperience}/>
      <SkillsCard skills={resumeData.skills}/>
      <EducationCard education={resumeData.education}/>
      <SpokenLanguagesCard spokenLanguages={resumeData.spokenLanguages} />
      <AboutCard about={resumeData.about}/>
    </div>
  );
};
export default Home;