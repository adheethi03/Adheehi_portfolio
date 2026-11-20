import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { summary, avatar } = portfolioData.personal;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Decorative corner arcs/circles matching reference */}
      <div className="hero-corner-circle-top-left" aria-hidden="true" />
      <div className="hero-corner-circle-bottom-right" aria-hidden="true" />

      {/* Decorative 4-point stars */}
      <div className="hero-star hero-star-left" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C12 7.5 7.5 12 0 12C7.5 12 12 16.5 12 24C12 16.5 16.5 12 24 12C16.5 12 12 7.5 12 0Z" />
        </svg>
      </div>
      <div className="hero-star hero-star-right" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C12 7.5 7.5 12 0 12C7.5 12 12 16.5 12 24C12 16.5 16.5 12 24 12C16.5 12 12 7.5 12 0Z" />
        </svg>
      </div>

      <div className="hero-container">
        {/* ── Left Column: Typography & CTAs ── */}
        <div className="hero-text">
          <div className="hero-label-row">
            <span className="hero-label-text">PORTFOLIO — 2026</span>
            <span className="hero-label-line" />
          </div>

          <h1 className="hero-title">
            <span className="hero-title-first">Adheethi</span>
            <span className="hero-title-last">K.S.</span>
          </h1>

          <div className="hero-tagline-row">
            <span>Full-Stack Developer</span>
            <span className="hero-dot">•</span>
            <span>MERN Stack</span>
            <span className="hero-dot">•</span>
            <span>AI Enthusiast</span>
          </div>

          <p className="hero-summary-text">{summary}</p>

          <div className="hero-buttons">
            <button className="hero-btn-primary" onClick={() => scrollTo('contact')}>
              Get In Touch
              <span className="hero-btn-arrow">→</span>
            </button>
            <button className="hero-btn-secondary" onClick={() => scrollTo('projects')}>
              View Work
            </button>
          </div>
        </div>

        {/* ── Right Column: Photo Composition exactly matching reference ── */}
        <div className="hero-visual">
          {/* Layer 1: Ambient Radial Glow behind everything */}
          <div className="hero-ambient-glow" aria-hidden="true" />

          {/* Layer 2: Outer Circular Outline (520px, thin 1px dusty-rose border) */}
          <div className="hero-outer-outline" aria-hidden="true" />

          {/* Layer 3: Inner Translucent Circle (350px, shifted right, blended gradient) */}
          <div className="hero-inner-circle" aria-hidden="true" />

          {/* Layer 4: Profile Photograph & Pedestal */}
          <div className="hero-photo-pedestal">
            {avatar && (
              <img
                src={avatar}
                alt="Adheethi K.S."
                className="hero-main-photo"
              />
            )}
            <div className="hero-pedestal-line" />
          </div>
        </div>
      </div>

      {/* Bottom left scroll indicator */}
      <div className="hero-scroll-indicator" onClick={() => scrollTo('about')}>
        <span className="hero-scroll-bar" />
        <span className="hero-scroll-caption">SCROLL</span>
      </div>
    </section>
  );
}
