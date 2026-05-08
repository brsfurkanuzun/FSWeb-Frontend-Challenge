import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import ProfileSection from './components/ProfileSection'
import ProjectsSection from './components/ProjectsSection'
import FooterSection from './components/FooterSection'
import { useAppContext } from './hooks/useAppContext'
import content from './data/content.json'
import heroImage from './assets/design-image-4.png'
import projectOne from './assets/design-image-1.png'
import projectTwo from './assets/design-image-2.png'
import projectThree from './assets/design-image-3.png'
import jsLogo from './assets/logos/javascript.png'
import reactLogo from './assets/logos/react.png'
import nodeLogo from './assets/logos/nodejs.png'
import githubLogo from './assets/logos/github.png'
import linkedinLogo from './assets/logos/linkedin.png'
import './App.css'

function App() {
  const { language } = useAppContext()
  const data = content[language]
  const imageMap = {
    'design-image-1': projectOne,
    'design-image-2': projectTwo,
    'design-image-3': projectThree,
  }
  const skillLogoMap = {
    'Java Script': jsLogo,
    'React.Js': reactLogo,
    'Node.Js': nodeLogo,
  }
  const socialLogoMap = {
    github: githubLogo,
    linkedin: linkedinLogo,
  }

  return (
    <>
      <Header nav={data.nav} />
      <main className="container page">
        <HeroSection hero={data.hero} heroImage={heroImage} socialLogoMap={socialLogoMap} />
        <SkillsSection title={data.skillsTitle} skills={data.skills} skillLogoMap={skillLogoMap} />
        <ProfileSection
          profileTitle={data.profileTitle}
          profileTable={data.profileTable}
          aboutTitle={data.aboutTitle}
          aboutText={data.aboutText}
        />
        <ProjectsSection
          title={data.projectsTitle}
          projects={data.projects}
          imageMap={imageMap}
          socialLogoMap={socialLogoMap}
          projectLinks={data.projectLinks}
        />
        <FooterSection
          footerTitle={data.footerTitle}
          email={data.email}
          footerLinks={data.footerLinks}
          socialLogoMap={socialLogoMap}
        />
      </main>
      <ToastContainer position="bottom-right" />
    </>
  )
}

export default App
