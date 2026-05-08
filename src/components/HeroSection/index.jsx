import './style.css'

function HeroSection({ hero, heroImage, socialLogoMap }) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-left">
        <p className="intro-label">{hero.label}</p>
        <h1>
          {hero.title}
          <br />
          {hero.title2}
        </h1>
        <p className="intro-text">{hero.subtitle}</p>
        <div className="hero-actions">
          <a className="filled" href="#footer">
            {hero.ctaPrimary}
          </a>
          <a className="social-btn" href="https://github.com/brsfurkanuzun" target="_blank" rel="noreferrer">
            <img src={socialLogoMap.github} alt="GitHub" />
            {hero.ctaSecondary}
          </a>
          <a
            className="social-btn"
            href="https://www.linkedin.com/in/barisfurkanuzun"
            target="_blank"
            rel="noreferrer"
          >
            <img src={socialLogoMap.linkedin} alt="LinkedIn" />
            {hero.ctaThird}
          </a>
        </div>
      </div>
      <img className="hero-image" src={heroImage} alt={hero.imageAlt} />
    </section>
  )
}

export default HeroSection
