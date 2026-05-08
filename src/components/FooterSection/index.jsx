import './style.css'

function FooterSection({ footerTitle, email, footerLinks, socialLogoMap }) {
  return (
    <section id="footer" className="footer-cta">
      <h2>{footerTitle}</h2>
      <div className="footer-row">
        <a className="mail-link" href={`mailto:${email}`}>
          <span className="mail-f-letter" aria-hidden="true">
            F
          </span>
          {email}
        </a>
        <div className="footer-links">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
              {link.label.toLowerCase().includes('git') ? (
                <img src={socialLogoMap.github} alt="GitHub" />
              ) : null}
              {link.label.toLowerCase().includes('linkedin') ? (
                <img src={socialLogoMap.linkedin} alt="LinkedIn" />
              ) : null}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FooterSection
