import { useAppContext } from '../../hooks/useAppContext'
import './style.css'

function Header({ nav }) {
  const { theme, toggleTheme, toggleLanguage } = useAppContext()
  const isDark = theme === 'dark'

  return (
    <header className="header">
      <nav className="container nav">
        <div className="rocket-letter" aria-label={nav.brand}>
          F
        </div>
        <div className="header-right">
          <div className="switch-row">
            <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              <span className={`switch ${isDark ? 'on' : ''}`}>
                <span className="switch-dot"></span>
              </span>
              <span>{nav.theme.toUpperCase()}</span>
            </button>
            <span className="divider">|</span>
            <button type="button" className="lang-toggle" onClick={toggleLanguage}>
              {nav.language.toUpperCase()}
            </button>
          </div>
          <div className="link-row">
            <a href="#skills">{nav.links.skills}</a>
            <a href="#projects">{nav.links.projects}</a>
            <a className="hire-btn" href="#footer">
              {nav.links.hire}
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
