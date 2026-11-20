import { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, languages } = portfolioData;
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <p className="section-label reveal">About</p>
        <h2 className="section-title reveal">About Me</h2>

        <div className="about-layout" style={{ marginTop: '48px' }}>
          {/* Left column */}
          <div className="about-left reveal">
            <div className="about-meta">
              <div className="meta-row">
                <span className="meta-label">Location</span>
                <span className="meta-value">{personal.location}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Email</span>
                <span className="meta-value">{personal.email}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Phone</span>
                <span className="meta-value">{personal.phone}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Languages</span>
                <div className="lang-row" style={{ marginTop: '6px' }}>
                  {languages.map(l => (
                    <span className="lang-chip" key={l}>{l}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="about-right reveal">
            <p>
              I'm a Computer Science Engineering graduate from MES College of Engineering, Kuttipuram,
              with a focused passion for full-stack web development. My primary expertise lies in the
              MERN stack — building scalable backends with Node.js and Express.js, managing data with
              MongoDB, and crafting component-driven frontends with React.
            </p>
            <p>
              Beyond technical development, I've led teams, organised campus-scale technical events, and
              maintained web platforms for IEEE and MATRICS — giving me a rounded perspective on how
              technology and people come together to create impact.
            </p>
            <p>
              I'm drawn to projects where AI and web development intersect, and I'm actively exploring
              how intelligent tooling can accelerate the way we build software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
