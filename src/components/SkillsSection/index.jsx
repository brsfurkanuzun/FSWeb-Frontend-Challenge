import SectionTitle from '../SectionTitle'
import './style.css'

function SkillsSection({ title, skills, skillLogoMap }) {
  return (
    <section id="skills" className="section-line">
      <SectionTitle>{title}</SectionTitle>
      <div className="skills-grid">
        {skills.map((skill) => (
          <article key={skill.name}>
            <h3 className="skill-title">
              <img src={skillLogoMap[skill.name]} alt={skill.name} />
              {skill.name}
            </h3>
            <p>{skill.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
