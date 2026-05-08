import SectionTitle from '../SectionTitle'
import './style.css'

function ProfileSection({ profileTitle, profileTable, aboutTitle, aboutText }) {
  return (
    <section id="profile" className="section-line">
      <SectionTitle>{profileTitle}</SectionTitle>
      <div className="profile-grid">
        <article>
          <h3>{profileTitle}</h3>
          <dl>
            {profileTable.map((item) => (
              <div key={item.label} className="profile-row">
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </article>
        <article>
          <h3>{aboutTitle}</h3>
          {aboutText.split('\n').map((paragraph, index) => (
            <p key={`${paragraph.slice(0, 10)}-${index}`}>{paragraph}</p>
          ))}
        </article>
      </div>
    </section>
  )
}

export default ProfileSection
