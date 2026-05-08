import SectionTitle from '../SectionTitle'
import './style.css'

function ProjectsSection({ title, projects, imageMap, socialLogoMap, projectLinks }) {
  return (
    <section id="projects" className="section-block">
      <SectionTitle>{title}</SectionTitle>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <img src={imageMap[project.image]} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tag-row">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="project-links">
              <a href="https://github.com/brsfurkanuzun" target="_blank" rel="noreferrer">
                <img src={socialLogoMap.github} alt="GitHub" />
                {projectLinks.github}
              </a>
              <a href="https://www.linkedin.com/in/barisfurkanuzun" target="_blank" rel="noreferrer">
                <img src={socialLogoMap.linkedin} alt="LinkedIn" />
                LinkedIn
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
