import resumeData from '../data/cv_python_dev.json'
import Title from '../components/ResumeTitle'
import ContactInfo from '../components/ContactInfo'
import WorkExperience from '../components/WorkExperience'

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Title titleData={resumeData.titleData}/>
      <ContactInfo contactInfo={resumeData.contactInfo}/>

      {/* WorkExperience Section */}
      <h2 className="text-2xl font-bold mb-4">{resumeData.workExperience.sectionTitle}</h2>
      <WorkExperience workExperienceItem={resumeData.workExperience.sectionList[0]}/>
      <WorkExperience workExperienceItem={resumeData.workExperience.sectionList[1]}/>
      <WorkExperience workExperienceItem={resumeData.workExperience.sectionList[2]}/>
      <WorkExperience workExperienceItem={resumeData.workExperience.sectionList[3]}/>
      <WorkExperience workExperienceItem={resumeData.workExperience.sectionList[4]}/>
      <WorkExperience workExperienceItem={resumeData.workExperience.sectionList[5]}/>

    {/* Skills Section */}
    <h2 className="text-2xl font-bold mb-4">{resumeData.skills.sectionTitle}</h2>
    <p>{resumeData.skills.sectionList}</p>

    {/* Education Section */}
    <h2 className="text-2xl font-bold mb-4">{resumeData.education.sectionTitle}</h2>
    <div>
      <h1 className="text-1xl font-bold mb-4">{resumeData.education.sectionList[0].title}</h1>
      <p>{resumeData.education.sectionList[0].yearStart} {resumeData.education.sectionList[0].yearEnd}</p>
      <p>{resumeData.education.sectionList[0].certificateBy}</p>
    </div><br />
    <div>
      <h1 className="text-1xl font-bold mb-4">{resumeData.education.sectionList[1].title}</h1>
      <p>{resumeData.education.sectionList[1].yearStart} {resumeData.education.sectionList[1].yearEnd}</p>
      <p>{resumeData.education.sectionList[1].certificateBy}</p>
    </div><br />
    <div>
      <h1 className="text-1xl font-bold mb-4">{resumeData.education.sectionList[2].title}</h1>
      <p>{resumeData.education.sectionList[2].yearStart} {resumeData.education.sectionList[2].yearEnd}</p>
      <p>{resumeData.education.sectionList[2].certificateBy}</p>
    </div><br />
    <div>
      <h1 className="text-1xl font-bold mb-4">{resumeData.education.sectionList[3].title}</h1>
      <p>{resumeData.education.sectionList[3].yearStart} {resumeData.education.sectionList[3].yearEnd}</p>
      <p>{resumeData.education.sectionList[3].certificateBy}</p>
    </div><br />
    <div>
      <h1 className="text-1xl font-bold mb-4">{resumeData.education.sectionList[4].title}</h1>
      <p>{resumeData.education.sectionList[4].yearStart} {resumeData.education.sectionList[4].yearEnd}</p>
      <p>{resumeData.education.sectionList[4].certificateBy}</p>
    </div><br />
    <div>
      <h1 className="text-1xl font-bold mb-4">{resumeData.education.sectionList[5].title}</h1>
      <p>{resumeData.education.sectionList[5].yearStart} {resumeData.education.sectionList[5].yearEnd}</p>
      <p>{resumeData.education.sectionList[5].certificateBy}</p>
    </div><br />


    {/* Spoken Languages Section */}
    <h2 className="text-2xl font-bold mb-4">{resumeData.spokenLanguages.sectionTitle}</h2>
    <p>{resumeData.spokenLanguages.sectionList[0].language}: {resumeData.spokenLanguages.sectionList[0].level}</p>
    <p>{resumeData.spokenLanguages.sectionList[1].language}: {resumeData.spokenLanguages.sectionList[1].level}</p>
    <p>{resumeData.spokenLanguages.sectionList[2].language}: {resumeData.spokenLanguages.sectionList[2].level}</p>

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